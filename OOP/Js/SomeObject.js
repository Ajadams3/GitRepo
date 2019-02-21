"use strict";

class BadHeroState{
    constructor(problem){
        this.problem=problem;
    }
}

class Hero{
    constructor(Strength, Perception, Endurance, Charisma, Intelligence, Agility, Luck){
        console.log("A Hero is Born");
        this._Strength = Strength;
        this._Perception = Perception;
        this._Endurance = Endurance;
        this._Charisma = Charisma;
        this._Intelligence = Intelligence;
        this._Agility = Agility;
        this._Luck = Luck;
        this._health = 100;
    }

    Adventure(){
        if (this._health > 40){
            console.log("You go on an adveture")
        }
        else{
            throw Hero.Health_TOO_LOW;
            }
    }

    get strength()
    {
        return this._Strength;
    }
    get perception()
    {
        return this._Perception;
    }
    get endurance()
    {
        return this._Endurance;
    }
    get charisma()
    {
        return this._Charisma;
    }
    get Intelligence()
    {
        return this._Intelligence;
    }
    get agility()
    {
        return this._Agiity;
    }
    get luck(){
        return this.Luck;
    }
}