import { Component, inject, input, InputSignal, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'starflow-input',
  imports: [ReactiveFormsModule],
  templateUrl: './ngx-starflow-rating-input.html',
  styleUrl: './ngx-starflow-rating-input.css',
})
export class NgxStarflowRatingInput {
  private readonly fb = inject(FormBuilder);

  // OUTPUT RATING VALUE
  /**
   * Emit rating value whenever it changes
   * For more info https://www.github.com/ahmadfakher/ngx-starflow#readme
   */
  ratingChange = output<number>();
  constructor() {
    this.ratingInput().valueChanges.subscribe((value) => {
      if (value !== null) {
        this.ratingChange.emit(Number(value));
      }
    });
  }

  //? REQUIRED VALIDATION
  required = input<boolean>(false);

  //? STARS FONT SIZE
  // DEFAULT MD
  // ACCEPT VALUES XS,SM,MD,LG,XL,2XL,3XL,4XL
  // REFER TO THE DOCS FOR MORE DETAILS ABOUT THE VALUES
  /**
   * Icon size value
   * Accepts xs, sm, md, lg, xl, 2xl, 3xl, 4xl
   * default 'md'
   * For more info https://www.github.com/ahmadfakher/ngx-starflow#readme
   */
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
  /**
   * Space between icons
   * Accepts 0, 1, 2, 3, 4, 5
   * 5 -> it will divide equally among the available space (uses justify between)
   * default 0
   * For more info https://www.github.com/ahmadfakher/ngx-starflow#readme
   */
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
  /**
   * Inactive star color
   * Accepts any color format
   * default #737373
   * For more info https://www.github.com/ahmadfakher/ngx-starflow#readme
   */
  bgColor: InputSignal<string> = input('#737373');

  //? HOVER STARS
  // HOVER STARS COLOR
  // DEFAULT #f0b1004D
  /**
   * Hover star color
   * Accepts any color format
   * default #f0b1004D
   * For more info https://www.github.com/ahmadfakher/ngx-starflow#readme
   */
  hoverColor: InputSignal<string> = input('#f0b1004D');

  //? ACTIVE STARS
  // ACTIVE STARS COLOR
  // DEFAULT #f0b100
  /**
   * Selected star color
   * Accepts any color format
   * default #f0b100
   * For more info https://www.github.com/ahmadfakher/ngx-starflow#readme
   */
  activeColor: InputSignal<string> = input('#f0b100');

  // STARS ICON
  // DEFAULT fa-regular fa-star
  // ANY FONTAWESOME CLASS WILL WORK
  /**
   * Star icon
   * Valid font awesome classes will work
   * default 'fa-solid fa-star'
   * For more info https://www.github.com/ahmadfakher/ngx-starflow#readme
   */
  iconClass = input<string>('fa-solid fa-star');

  ratings = [5, 4, 3, 2, 1];

  ratingInput = signal(
    this.fb.control('', [Validators.required, Validators.min(1), Validators.max(5)]),
  );
}
