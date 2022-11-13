class Person {

    constructor(name, pdv, classe, equipement, bouclier) {
        this.name = name,
            this.pdv = pdv,
            this.classe = classe,
            this.equipement = equipement
            this.bouclier = bouclier




    }

    get getName() {
        return this.name
    }
    set setName(value) {
        this.name = value
    }

    get getPdv() {
        return this.pdv
    }
    set setPdv(value) {
        this.pdv = value

    }

    get getClasse() {
        return this.classe
    }
    set setClasse(value) {
        this.classe = value
    }

    get getEquipement() {
        return this.equipement
    }
    set setEquipement(value) {
        this.equipement = value
    }

    get getBouclier() {
        return this.bouclier
    }
    set setBouclier(value) {
        this.bouclier = value
    }


    attaque(min, max) {
      
        let value = Math.floor(Math.random() * (max - min + 1) + min);
        
        this.degatsSurBouclier(value)

        if(this.pdv < 0)
        {
            this.pdv = 0
           console.log("Le personnage est mort"); 
        }
        return value
    }


    soigner(min, max){
        let value = Math.floor(Math.random() * (max - min + 1) + min)
        this.pdv = this.pdv + value
        return value
        console.log(value);
        //console.log(this.pdv);

    }


   addBaguette(bonus)
    {
        this.pdv = this.pdv + bonus
        console.log(this.pdv);
    }


    addBouclier(value){
        this.bouclier = this.bouclier + value

        console.log(this.bouclier);
    }


    degatsSurBouclier(value){
      if(value > this.bouclier){
        this.pdv = this.pdv - (value - this.bouclier)
        this.bouclier = 0 
      }else{
        this.bouclier =  this.bouclier - value 
      }
      
    }


}







class Ork extends Person {

    

    constructor(name, pdv, classe, equipement, degats, bouclier) {
        super(name, pdv, classe, equipement, degats, bouclier)
       
    }

    addHache(bonus)
    {
        this.pdv = this.pdv + bonus
        console.log(this.pdv);
    }



}