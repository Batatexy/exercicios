import { Injectable } from '@angular/core';
import { Cast } from '../models/cast';

@Injectable({
  providedIn: 'root'
})
export class CastsService {

  private casts: Array<Cast> = this.getCastsAPI();

  public getCasts(){
    return this.casts;
  }

  public getCastById(id: number): Cast | null{
    let returnCast: Cast | null = null;
        this.casts.forEach(cast => 
        {
          if (cast.movieID == id) 
          {
            returnCast = cast;
          }
        });
    
        return returnCast;
  }

    public getCastsAPI(): Array<Cast>{
      return [
        {
          movieID: 0,
          actors:
          [
            {
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSll2D4qrExn4ybATgpIbsNAKwxktczhG0vQ&s",
              actorName: "João",
              characterName: "Jack",
            },
            {
              image: "https://pyxis.nymag.com/v1/imgs/749/073/31c8f4c633387d54296ce298ef21122f30-04-jonah-hill.rsquare.w330.jpg",
              actorName: "Cleber",
              characterName: "Rodriguez",
            }
          ]
        },
        {
          movieID: 1,
          actors:
          [
            {
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyP62RjdtcYgudg0AhQvEOKf75k1zlUvNtTw&s",
              actorName: "Carlos",
              characterName: "Edward",
            }
          ]
        }
      ]
    }
}
