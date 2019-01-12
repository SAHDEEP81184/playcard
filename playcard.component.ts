import { Component } from '@angular/core';

@Component({

    selector: 'PlayCard',
    template : `
    
    <h1 class="HeadLine"> Play Card Application </h1>
    
    <div class= "space"></div>
   
    <a href="#" type="button"  (click)="shuffleCard($event)" class="btn-lg btn-default my-button my-button-active">Shuffle Cards</a>
    <a href="#" type="button" (click) ="sortCards()" class="btn-lg btn-default my-button my-button-active">Sort Card</a>
    <div class= "space">----------------------------------------------------</div>
    <table>
    <tr *ngFor = " let cards of PlayCards " >
    <div class= "space"></div>
    <td class= "space">{{cards.name}} <img src="{{cards.img}}" width="50"> </td> 
    <a href="#" type="button"  (click) ="removeCards(cards)" class="btn-lg btn-default my-button my-button-active">Remove</a>
    
    </tr> 
    </table>
    
    `
})

export class PlayCardComponent {
    temp;
    PlayCards: any = [
        { name:'Clubs', img:'./assets/clubs.jpg'},
        { name:'Spades', img:'./assets/spades.jpg'},
        { name:'Hearts', img:'./assets/heart.jpg'},
        { name:'Daimonds', img:'./assets/diamond.jpg'}];
   
        shuffleCard($event){
        var len = this.PlayCards.length,
        temp,
        indx;
        while (len) {
        indx = Math.floor(Math.random() * len--);
        temp = this.PlayCards[len];
        this.PlayCards[len] = this.PlayCards[indx];
        this.PlayCards[indx] = temp;
        }
    } 
    
      removeCards(elem:string){
        const index: number = this.PlayCards.indexOf(elem);
        console.log('index:--', index);
        if (index !== -1) {
            this.PlayCards.splice(index, 1);
        }  
        
       }
      
        sortCards(){
       
             var arrLen = this.PlayCards.length;
             console.log(arrLen);

             this.PlayCards.sort(function(a, b){
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA < nameB)
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 
            })
                  
            }

}