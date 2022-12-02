import {Payload} from "./Payload"
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name,
        this.totalCapacityKg = totalCapacityKg
    }

    sumMass(items: Payload[] ): number {
        let totalMass = 0;
        for(const i=0; i < items.length; i++){
            totalMass += items[i].massKg
        }
        return totalMass
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts)
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }

    addCargo(cargo: Payload): boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo)
            return true
        }
        return false
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true
        }
        return false
    }

 }