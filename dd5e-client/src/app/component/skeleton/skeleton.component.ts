import { Component, Input, OnInit } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
    selector: 'app-skeleton',
    templateUrl: './skeleton.component.html',
    styleUrls: ['./skeleton.component.scss'],
    animations: [
        trigger('myAnimation', [
            state('loaded', style({
                opacity: 1,
                visibility: 'visible',
            })),
            state('loading', style({
                opacity: 0,
                visibility: 'hidden',
            })),
            transition('loading => loaded', [
                animate('0.3s')
            ]),
            transition('loaded => loading', [
                animate('0.5s')
            ]),
        ])
    ]
})
export class SkeletonComponent implements OnInit {
    @Input() isLoading = true
    @Input() count = 1
    @Input() appearance: 'circle' | '' = ''
    @Input() animation: 'progress' | 'progress-dark' | 'pulse' | 'false' = 'pulse'
    @Input() theme: {
        [k: string]: string;
    } = {}

    constructor() {
    }

    ngOnInit(): void {
    }

}
