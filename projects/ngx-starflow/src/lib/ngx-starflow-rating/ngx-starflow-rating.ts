import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'ngx-starflow',
  imports: [],
  standalone: true,
  templateUrl: './ngx-starflow-rating.html',
  styleUrl: './ngx-starflow-rating.css',
})
export class NgxStarflowRating {
  //? RATING VALUE
  // THE RATING VALUE THAT WILL BE USED (RESTRICTED TO BE BETWEEN 0 AND 5)
  rating: InputSignal<number> = input.required({
    transform: (value: number) => {
      if (value < 0 || value > 5) {
        throw new Error('Rating must be between 0 and 5');
      }
      return value;
    },
  });

  //? STARS FONT SIZE
  // DEFAULT MD
  // ACCEPT VALUES XS,SM,MD,LG,XL,2XL,3XL,4XL
  // REFER TO THE DOCS FOR MORE DETAILS ABOUT THE VALUES
  size = input<string>('md');

  // FUNCTION TO SET THE FONT SIZE THAT WILL BE USED
  sizeClass(): string {
    switch (this.size()) {
      case 'xs':
        return 'ngx-starflow-text-xs';
      case 'sm':
        return 'ngx-starflow-text-sm';
      case 'md':
        return 'ngx-starflow-text-normal';
      case 'lg':
        return 'ngx-starflow-text-lg';
      case 'xl':
        return 'ngx-starflow-text-xl';
      case '2xl':
        return 'ngx-starflow-text-2xl';
      case '3xl':
        return 'ngx-starflow-text-3xl';
      case '4xl':
        return 'ngx-starflow-text-4xl';
      default:
        return 'ngx-starflow-text-normal';
    }
  }

  //? GAP BETWEEN STARS
  // DEFAULT 0
  // ACCEPT VALUES 0,1,2,3,4,5
  // REFER TO THE DOCS FOR MORE DETAILS ABOUT THE GAPS
  spacing: InputSignal<number> = input(0);

  // FUNCTION TO SET THE SPACING THAT WILL BE USED
  spacingClass(): string {
    switch (this.spacing()) {
      case 0:
        return 'ngx-starflow-gap-0';
      case 1:
        return 'ngx-starflow-gap-1';
      case 2:
        return 'ngx-starflow-gap-2';
      case 3:
        return 'ngx-starflow-gap-3';
      case 4:
        return 'ngx-starflow-gap-4';
      case 5:
        return 'ngx-starflow-gap-5';
      default:
        return 'ngx-starflow-gap-0';
    }
  }

  //? BACKGROUND STARS
  // BACKGROUND STARS COLOR
  // DEFAULT #737373
  bgColor: InputSignal<string> = input('#737373');
  // BACKGROUND STARS ICON
  // DEFAULT fa-regular fa-star
  // ANY FONTAWESOME CLASS WILL WORK
  bgIconClass = input<string>('fa-regular fa-star');

  //? ACTIVE STARS
  // ACTIVE STARS COLOR
  // DEFAULT #f0b100
  fgColor: InputSignal<string> = input('#f0b100');
  // ACTIVE STARS ICON
  // DEFAULT fa-solid fa-star
  // ANY FONTAWESOME CLASS WILL WORK
  activeIconClass = input<string>('fa-solid fa-star');

  stars = Array(5).fill(0);

  // FUNCTION TO CALCULATE THE RATING AS A PERCENTAGE TO FILL ACCORDINGLY
  calculateRating(): number {
    const percentage: number = (this.rating() / 5) * 100;
    return 100 - percentage;
  }
}
