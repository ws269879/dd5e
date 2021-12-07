import {Component, Input, OnInit} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string
  @Input() content: string
  @Input() image: ICardImg
  @Input() links: ICardLinks[]

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  handleClick() {
    if (this.links.length === 1) {
      const normalisedUrl = this.links[0].link
      if (normalisedUrl.startsWith('/')) {
        this._router.navigate([normalisedUrl])
      } else {
        window.location.href = normalisedUrl
      }
    }
  }

}

export interface ICard {
  title: string,
  links: ICardLinks[],
  content: string,
  image: ICardImg,
  admin?: boolean
}

interface ICardImg {
  link: string;
  type: 'customSvg' | 'img',
  alt?: string
}

interface ICardLinks {
  text: string,
  link: string
}
