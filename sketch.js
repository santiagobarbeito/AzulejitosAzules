let tiempo_cambio=200;
matriz=[];
let lado=0;
let elemento=0;
let frecuencia=500;
let activar_cambio=0;
let j=0;

class cuadradito{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.R=int(random(0,155));
    this.G=int(random(0,155));
    this.B=255;
  }
  /*diferencia_color(){
    this.dif_R=255-this.R;
    this.dif_G=255-this.R;
    this.dif_B=255-this.R;
  }
  pendiente_color(){
    this.R=this.R+(this.dif_R/tiempo_cambio);
    this.G=this.G+(this.dif_G/tiempo_cambio);
    this.B=this.B+(this.dif_B/tiempo_cambio);
  }
  cambiar_color(){
    this.diferencia_color();
    while (this.R<255 & this.G<255 & this.B<255){
      this.pendiente_color()
    }
  }
  */
  cambiar_color(){
    this.R=int(random(0,155));
    this.G=int(random(0,155));
    this.B=255;
  }

  display(){
    noStroke();
    fill(this.R,this.G,this.B,255);
    rect(this.x,this.y,lado,lado);
  }
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  lado=width/32;
  for (let i=0; i<1024; i++){
    matriz.push(new cuadradito((i%32)*lado,int(i/32)*lado))
  }
}

function draw() {
  background(255);
  for (let i = 0; i<matriz.length; i++){
    matriz[i].display()
  }
  if((frameCount%frecuencia<1) & activar_cambio<1){
    activar_cambio=1;
    elemento=int(random(0,32));
  }
  if (frameCount%5<1){
    if (activar_cambio==1){
      matriz[(elemento+(j*33))%1024].cambiar_color();
      j=j+1;
      if (j==31){
        activar_cambio=0;
        j=0;
        frecuencia = random(165,1000);
      }
    }
  }
}

