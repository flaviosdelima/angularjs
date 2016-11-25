var Language = function(config){
   this.name = config.name;
   this.founder = config.founder;
   this.year = config.year;
};

Language.prototype.summary = function()
{
  return this.name + " foi criado por "+this.founder+" in "+this.year;
};


////////////////////////////////////////////////////////////////

class Language{

constructor(name,founder,year){
  this.name = name;
  this.founder = founder;
  this.year = year;
  }
  
  summary(){
  return this.name + " foi criado por "+this.founder+" in "+this.year;
  }
  
}
