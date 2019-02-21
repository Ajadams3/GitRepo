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
    set strength(value)
    {
        if(typeof value == "number")
        {
            this._Strength = value;
        }
        else
        {
            throw Hero.Invalid_Strength_Value;
        }
    }
    set perception(value)
    {
        if(typeof value == "number")
        {
            this._Perception = value;
        }
        else
        {
            throw Hero.Invalid_Perception_Value;
        }
    }
    set endurance(value)
    {
        if(typeof value == "number")
        {
            this._Endurance= value;
        }
        else
        {
            throw Hero.Invalid_Endurance_Value;
        }
    }
    set charisma(value)
    {
        if(typeof value == "number")
        {
            this._Charisma = value;
        }
        else
        {
            throw Hero.Invalid_Charisma_Value;
        }
    }
    set Intelligence(value)
    {
        if(typeof value == "number")
        {
            this._Intelligence = value;
        }
        else
        {
            throw Hero.Invalid_Intel_Value;
        }
    }
    set agility(value)
    {
        if(typeof value == "number")
        {
            this._Agility = value;
        }
        else
        {
            throw Hero.Invalid_Agil_Value;
        }
    }
    set luck(value){
        if(typeof value == "number")
        {
            this._Luck = value;
        }
        else
        {
            throw Hero.Invalid_Luck_Value;
        }
    } 
} 
    Hero.Invalid_Strength_Value = new BadHeroState("Strength Value must be a number")
    Hero.Invalid_Perception_Value = new BadHeroState("Perception Value must be a number")
    Hero.Invalid_Endurance_Value = new BadHeroState("Endurance Value must be a number")
    Hero.Invalid_Charisma_Value = new BadHeroState("Charisma Value must be a number")
    Hero.Invalid_Intel_Value = new BadHeroState("Intelligence Value must be a number")
    Hero.Invalid_Agil_Value = new BadHeroState("Agility Value must be a number")
    Hero.Invalid_Luck_Value = new BadHeroState("Luck Value must be a number")
    exports.Hero = Hero;
    exports.BadHeroState = BadHeroState;