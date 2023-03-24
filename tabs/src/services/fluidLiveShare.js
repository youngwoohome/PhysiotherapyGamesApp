import { LiveShareClient } from "@microsoft/live-share";
import { LiveShareHost } from "@microsoft/teams-js";
import { SharedMap } from "fluid-framework";

// interface IFluidService {
//     connect: () => void;                             // Connect to the Fluid service
//     addPerson: (name: string) => Promise<void>;      // Add a person to the list
//     removePerson: (name: string) => Promise<void>;   // Remove a person from the list
//     nextPerson: () => Promise<void>;                 // Go to next person
//     shuffle: () => Promise<void>;                    // Shuffle the list of speakers
//     getPersonList: () => Promise<string[]>;          // Get the current person list
//     // Event handler called when new person list is available
//     onNewData: (handler: (personList: string[]) => void) => void;
// }

class FluidService {

    // Constants
    #PERSON_VALUE_KEY = "person-value-key"; // Key for use in shared map

    // Service state
    #container;                     // Fluid container
    #people = ['','',''];           // Local array of game moves made by people
    #registeredEventHandlers = [];  // Array of event handlers to call when contents change
    #connectPromise;                // Singleton promise so we only connect once

    // Public function returns a singleton promise that resolves when we're
    // connected to the Fluid Relay service
    connect = () => {
        if (!this.#connectPromise) {
            this.#connectPromise = this.#connect();
        }
        return this.#connectPromise
    }

    // Private function connects to the Fluid Relay service
    #connect = async () => {
        try {
            const liveShareHost = LiveShareHost.create();

            const liveShareClient = new LiveShareClient(liveShareHost);
            const { container } = await liveShareClient.joinContainer(
                // Container schema
                {
                    initialObjects: { personMap: SharedMap }
                });
            this.#container = container;
            //logic for sharing between client data
            const json = this.#container.initialObjects.personMap.get(this.#PERSON_VALUE_KEY) || "[]";
            this.#people = JSON.parse(json);

            // Register a function to update the app when data in the Fluid Relay changes
            this.#container.initialObjects.personMap.on("valueChanged", async () => {
                const json = this.#container.initialObjects.personMap.get(this.#PERSON_VALUE_KEY);
                this.#people = JSON.parse(json);
                for (let handler of this.#registeredEventHandlers) {
                    await handler(this.#people);
                }
            });

        }
        catch (error) {
            console.log(`Error in fluid service: ${error.message}`);
            throw (error);
        }
    }
 
    // Private function to update the Fluid relay from the local array of people
    #updateFluid = async () => {
        const json = JSON.stringify(this.#people);
        this.#container.initialObjects.personMap.set(this.#PERSON_VALUE_KEY, json);
    }
    // updatefluid has to be called every time people array is change. (the shared array) so it can update clients

    // Public functions used by the UI
    resetGame = async () => {
        this.#people = [];
        await this.#updateFluid(); //like here this tells other clients we changed the state
    }

    addSquareandMove = async (name) => { // everytime we click a square we add x-0 and stuff ....
        if (!name) {
            throw new Error (`Please enter a name to add to the list`);
        }
        if (this.#people.includes(name)) {
            throw new Error(`${name} is already on the list`);
        }
        this.#people.push(name);
        await this.#updateFluid();
    }


    getMovesList = async () => {
        return this.#people;
    }

    onNewData = (e) => {
        this.#registeredEventHandlers.push(e);
    }

}

export default new FluidService();