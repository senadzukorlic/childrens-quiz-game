import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="achievement-overlay">
      <div class="achievement-container">
        <div class="lesson-complete-title">Lesson complete!</div>

        <div class="circle-container">
          <div class="circle">
            <div class="base" [style.border-color]="circleColor"></div>
            <div class="ellipse" [style.border-color]="circleColor"></div>
            <div class="percentage">{{ percentage }}%</div>
            <div class="awesome-job">Awesome job!</div>
          </div>
        </div>

        <div class="achievement-badge">
          <div class="trophy-icon">
            <div class="trophy-container">
              <svg
                class="trophy"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 2V3.33333H2.66667C1.74667 3.33333 1 4.08 1 5C1 5.92 1.74667 6.66667 2.66667 6.66667H4C4 8.86667 5.72 10.6133 8 10.6667V12H5.33333V14H10.6667V12H8V10.6667C10.28 10.6133 12 8.86667 12 6.66667H13.3333C14.2533 6.66667 15 5.92 15 5C15 4.08 14.2533 3.33333 13.3333 3.33333H12V2H4Z"
                  fill="#FFC443"
                />
              </svg>
            </div>
          </div>
          <div class="achievement-text">
            Achievement earned! Completed your first lesson
          </div>
        </div>

        <button class="continue-button" (click)="onContinue()">Continue</button>
      </div>

      <!-- Decorative images -->
      <div class="decorative-images">
        <div class="image-top"></div>
        <div class="image-left"></div>
        <div class="image-right"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .achievement-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
      }

      .achievement-container {
        position: relative;
        width: 325px;
        height: 450px;
        background: #ffffff;
        border: 1px solid #dfdfdf;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
        box-sizing: border-box;
      }

      .lesson-complete-title {
        position: absolute;
        top: -45px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #ffffff;
      }

      .circle-container {
        margin-top: 32px;
        margin-bottom: 20px;
      }

      .circle {
        position: relative;
        width: 150px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .base {
        box-sizing: border-box;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0.2;
        border: 8px solid;
        border-radius: 50%;
      }

      .ellipse {
        box-sizing: border-box;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border: 8px solid;
        border-radius: 50%;
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
      }

      .percentage {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #343b6e;
        z-index: 2;
      }

      .awesome-job {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.03em;
        color: #343b6e;
        margin-top: 5px;
        z-index: 2;
      }

      .achievement-badge {
        display: flex;
        align-items: center;
        margin-top: 14px;
        width: 235px;
        height: 80px;
      }

      .trophy-icon {
        box-sizing: border-box;
        width: 40px;
        height: 40px;
        background: #fffadd;
        border: 1px solid #ffc443;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .trophy-container {
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .achievement-text {
        width: 183px;
        margin-left: 12px;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        height: 40px;
      }

      .continue-button {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 0px;
        width: 277px;
        height: 44px;
        background: #f15d41;
        border-width: 1px 1px 0px 1px;
        border-style: solid;
        border-color: #000000;
        box-shadow: 0px 4px 1px #343b6e;
        border-radius: 10px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #ffffff;
        cursor: pointer;
        margin-top: auto;
        margin-bottom: 24px;
        transition: transform 0.1s;
      }

      .continue-button:hover {
        background: #ff6e52;
      }

      .continue-button:active {
        transform: translateY(2px);
        box-shadow: 0px 2px 1px #343b6e;
      }

      .decorative-images {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
      }

      .image-top {
        position: absolute;
        width: 100px;
        height: 100px;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        background-color: transparent;
        border-radius: 50%;
        background-image: linear-gradient(45deg, #ffd1a3, #ffc443);
      }

      .image-left {
        position: absolute;
        width: 60px;
        height: 60px;
        top: 35px;
        left: -70px;
        transform: rotate(-10deg);
        background-color: transparent;
        border-radius: 50%;
        background-image: linear-gradient(45deg, #ffb2a3, #f15d41);
      }

      .image-right {
        position: absolute;
        width: 60px;
        height: 60px;
        top: 25px;
        right: -70px;
        transform: rotate(10deg);
        background-color: transparent;
        border-radius: 50%;
        background-image: linear-gradient(45deg, #a3e0ff, #3387ff);
      }
    `,
  ],
})
export class AchievementComponent {
  @Input() percentage: number = 90;
  @Input() achievementText: string =
    'Achievement earned! Completed your first lesson';
  @Input() circleColor: string = '#343B6E';

  onContinue() {
    console.log('Continue button clicked');
  }
}
