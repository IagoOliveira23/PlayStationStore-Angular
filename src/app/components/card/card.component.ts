import { Component , OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  @Input()
  gameCover:string=''
  constructor(){}

  @Input()
  gameLabel:string = ""

  @Input()
  gameType:string='XPTO | PS4'

  @Input()
  gamePrice:string= 'R$ 219.99'

  ngOnInit(): void {
      
  }
}
