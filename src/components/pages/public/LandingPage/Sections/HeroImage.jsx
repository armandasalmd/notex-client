import React from "react";
import "./HeroImage.less";

const HeroImage = (props) => {
    const { className } = props;

    return (
        <div className={className}>
            <svg width="100%" height="100%" viewBox="0 0 612 472" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="hero-image">
                    <g id="group-waves">
                        <path id="Vector" d="M43 284.494L40.5055 282L36.524 286.03L32.4945 282L30 284.494L34.0295 288.524L30 292.554L32.4945 295L36.524 291.018L40.5055 295L43 292.554L38.9705 288.524L43 284.494Z" fill="#909CFF" />
                        <path d="M53.1131 406.549C52.406 407.256 51.2746 407.256 50.5675 406.549L44.6985 400.68C43.9914 399.973 43.9914 398.842 44.6985 398.135L49.2947 393.538C50.0018 392.831 50.0018 391.7 49.2947 390.993L44.6985 386.397C43.9914 385.69 43.9914 384.558 44.6985 383.851L49.2947 379.255C50.0018 378.548 50.0018 377.416 49.2947 376.709L44.7692 372.184C44.0621 371.477 44.0621 370.345 44.7692 369.638L49.3654 365.042C50.0725 364.335 50.0725 363.204 49.3654 362.496L44.8399 357.971C44.1328 357.264 44.1328 356.132 44.8399 355.425L49.4361 350.829C50.1432 350.122 50.1432 348.991 49.4361 348.284L44.8399 343.687C44.1328 342.98 44.1328 341.849 44.8399 341.142L50.7089 335.273C51.416 334.566 52.5474 334.566 53.2545 335.273C53.9616 335.98 53.9616 337.111 53.2545 337.818L49.9311 341.142C49.224 341.849 49.224 342.98 49.9311 343.687L54.5273 348.284C55.2344 348.991 55.2344 350.122 54.5273 350.829L49.9311 355.425C49.224 356.132 49.224 357.264 49.9311 357.971L54.5273 362.567C55.2344 363.274 55.2344 364.406 54.5273 365.113L49.8604 369.78C49.1532 370.487 49.1533 371.618 49.8604 372.325L54.4566 376.921C55.1637 377.628 55.1637 378.76 54.4565 379.467L49.8604 384.063C49.1532 384.77 49.1532 385.902 49.8604 386.609L54.4565 391.205C55.1637 391.912 55.1637 393.043 54.4566 393.751L49.8604 398.347C49.1533 399.054 49.1532 400.185 49.8604 400.892L53.1838 404.216C53.8202 404.711 53.8202 405.842 53.1131 406.549Z" fill="#3AE4DF" />
                        <path d="M38.1131 423.549C37.406 424.256 36.2746 424.256 35.5675 423.549L29.6985 417.68C28.9914 416.973 28.9914 415.842 29.6985 415.135L34.2947 410.538C35.0018 409.831 35.0018 408.7 34.2947 407.993L29.6985 403.397C28.9914 402.69 28.9914 401.558 29.6985 400.851L34.2947 396.255C35.0018 395.548 35.0018 394.416 34.2947 393.709L29.7692 389.184C29.0621 388.477 29.0621 387.345 29.7692 386.638L34.3654 382.042C35.0725 381.335 35.0725 380.204 34.3654 379.496L29.8399 374.971C29.1328 374.264 29.1328 373.132 29.8399 372.425L34.4361 367.829C35.1432 367.122 35.1432 365.991 34.4361 365.284L29.8399 360.687C29.1328 359.98 29.1328 358.849 29.8399 358.142L35.7089 352.273C36.416 351.566 37.5474 351.566 38.2545 352.273C38.9616 352.98 38.9616 354.111 38.2545 354.818L34.9311 358.142C34.224 358.849 34.224 359.98 34.9311 360.687L39.5273 365.284C40.2344 365.991 40.2344 367.122 39.5273 367.829L34.9311 372.425C34.224 373.132 34.224 374.264 34.9311 374.971L39.5273 379.567C40.2344 380.274 40.2344 381.406 39.5273 382.113L34.8604 386.78C34.1532 387.487 34.1533 388.618 34.8604 389.325L39.4566 393.921C40.1637 394.628 40.1637 395.76 39.4565 396.467L34.8604 401.063C34.1532 401.77 34.1532 402.902 34.8604 403.609L39.4565 408.205C40.1637 408.912 40.1637 410.043 39.4566 410.751L34.8604 415.347C34.1533 416.054 34.1532 417.185 34.8604 417.892L38.1838 421.216C38.8202 421.711 38.8202 422.842 38.1131 423.549Z" fill="#F7D89E" />
                    </g>
                    <path id="group-circle" d="M600.245 206.967C593.584 207.065 588.099 201.776 588.001 195.213C587.903 188.553 593.193 183.068 599.755 182.97C606.416 182.872 611.901 188.161 611.999 194.723C612.097 201.384 606.807 206.869 600.245 206.967ZM599.951 188.553C596.425 188.651 593.584 191.589 593.584 195.115C593.682 198.641 596.621 201.482 600.147 201.482C603.673 201.384 606.514 198.445 606.514 194.919C606.416 191.295 603.477 188.455 599.951 188.553Z" fill="#909CFF" />
                    <g id="group-grid2">
                        <g>
                            <path d="M491.774 465.585C491.774 462.334 489.138 459.698 485.887 459.698C482.636 459.698 480 462.334 480 465.585C480 468.836 482.636 471.472 485.887 471.472C489.138 471.472 491.774 468.836 491.774 465.585Z" fill="#3AE4DF" />
                            <path d="M491.774 436.396C491.774 433.145 489.138 430.509 485.887 430.509C482.636 430.509 480 433.145 480 436.396C480 439.647 482.636 442.283 485.887 442.283C489.138 442.283 491.774 439.647 491.774 436.396Z" fill="#3AE4DF" />
                            <path d="M491.774 407.208C491.774 403.956 489.138 401.321 485.887 401.321C482.636 401.321 480 403.956 480 407.208C480 410.459 482.636 413.094 485.887 413.094C489.138 413.094 491.774 410.459 491.774 407.208Z" fill="#3AE4DF" />
                            <path d="M491.774 378.264C491.774 375.013 489.138 372.377 485.887 372.377C482.636 372.377 480 375.013 480 378.264C480 381.515 482.636 384.151 485.887 384.151C489.138 384.151 491.774 381.515 491.774 378.264Z" fill="#3AE4DF" />
                            <path d="M491.774 349.075C491.774 345.824 489.138 343.189 485.887 343.189C482.636 343.189 480 345.824 480 349.075C480 352.327 482.636 354.962 485.887 354.962C489.138 354.962 491.774 352.327 491.774 349.075Z" fill="#3AE4DF" />
                            <path d="M491.774 319.887C491.774 316.636 489.138 314 485.887 314C482.636 314 480 316.636 480 319.887C480 323.138 482.636 325.774 485.887 325.774C489.138 325.774 491.774 323.138 491.774 319.887Z" fill="#3AE4DF" />
                        </g>
                        <g>
                            <path d="M521.208 465.585C521.208 462.334 518.572 459.698 515.321 459.698C512.07 459.698 509.434 462.334 509.434 465.585C509.434 468.836 512.07 471.472 515.321 471.472C518.572 471.472 521.208 468.836 521.208 465.585Z" fill="#3AE4DF" />
                            <path d="M521.208 436.396C521.208 433.145 518.572 430.509 515.321 430.509C512.07 430.509 509.434 433.145 509.434 436.396C509.434 439.647 512.07 442.283 515.321 442.283C518.572 442.283 521.208 439.647 521.208 436.396Z" fill="#3AE4DF" />
                            <path d="M521.208 407.208C521.208 403.956 518.572 401.321 515.321 401.321C512.07 401.321 509.434 403.956 509.434 407.208C509.434 410.459 512.07 413.094 515.321 413.094C518.572 413.094 521.208 410.459 521.208 407.208Z" fill="#3AE4DF" />
                            <path d="M521.208 378.264C521.208 375.013 518.572 372.377 515.321 372.377C512.07 372.377 509.434 375.013 509.434 378.264C509.434 381.515 512.07 384.151 515.321 384.151C518.572 384.151 521.208 381.515 521.208 378.264Z" fill="#3AE4DF" />
                            <path d="M521.208 349.075C521.208 345.824 518.572 343.189 515.321 343.189C512.07 343.189 509.434 345.824 509.434 349.075C509.434 352.327 512.07 354.962 515.321 354.962C518.572 354.962 521.208 352.327 521.208 349.075Z" fill="#3AE4DF" />
                            <path d="M521.208 319.887C521.208 316.636 518.572 314 515.321 314C512.07 314 509.434 316.636 509.434 319.887C509.434 323.138 512.07 325.774 515.321 325.774C518.572 325.774 521.208 323.138 521.208 319.887Z" fill="#3AE4DF" />
                        </g>
                        <g>
                            <path d="M550.887 465.585C550.887 462.334 548.252 459.698 545.001 459.698C541.749 459.698 539.114 462.334 539.114 465.585C539.114 468.836 541.749 471.472 545.001 471.472C548.252 471.472 550.887 468.836 550.887 465.585Z" fill="#3AE4DF" />
                            <path d="M550.887 436.396C550.887 433.145 548.251 430.509 545 430.509C541.749 430.509 539.113 433.145 539.113 436.396C539.113 439.647 541.749 442.283 545 442.283C548.251 442.283 550.887 439.647 550.887 436.396Z" fill="#3AE4DF" />
                            <path d="M550.887 407.208C550.887 403.956 548.251 401.321 545 401.321C541.749 401.321 539.113 403.956 539.113 407.208C539.113 410.459 541.749 413.094 545 413.094C548.251 413.094 550.887 410.459 550.887 407.208Z" fill="#3AE4DF" />
                            <path d="M550.887 378.264C550.887 375.013 548.251 372.377 545 372.377C541.749 372.377 539.113 375.013 539.113 378.264C539.113 381.515 541.749 384.151 545 384.151C548.251 384.151 550.887 381.515 550.887 378.264Z" fill="#3AE4DF" />
                            <path d="M550.887 349.075C550.887 345.824 548.251 343.189 545 343.189C541.749 343.189 539.113 345.824 539.113 349.075C539.113 352.327 541.749 354.962 545 354.962C548.251 354.962 550.887 352.327 550.887 349.075Z" fill="#3AE4DF" />
                            <path d="M550.887 319.887C550.887 316.636 548.251 314 545 314C541.749 314 539.113 316.636 539.113 319.887C539.113 323.138 541.749 325.774 545 325.774C548.251 325.774 550.887 323.138 550.887 319.887Z" fill="#3AE4DF" />
                        </g>
                        <g>
                            <path d="M580.321 465.585C580.321 462.334 577.685 459.698 574.434 459.698C571.183 459.698 568.547 462.334 568.547 465.585C568.547 468.836 571.183 471.472 574.434 471.472C577.685 471.472 580.321 468.836 580.321 465.585Z" fill="#3AE4DF" />
                            <path d="M580.321 436.396C580.321 433.145 577.685 430.509 574.434 430.509C571.183 430.509 568.547 433.145 568.547 436.396C568.547 439.647 571.183 442.283 574.434 442.283C577.685 442.283 580.321 439.647 580.321 436.396Z" fill="#3AE4DF" />
                            <path d="M580.321 407.208C580.321 403.956 577.685 401.321 574.434 401.321C571.183 401.321 568.547 403.956 568.547 407.208C568.547 410.459 571.183 413.094 574.434 413.094C577.685 413.094 580.321 410.459 580.321 407.208Z" fill="#3AE4DF" />
                            <path d="M580.321 378.264C580.321 375.013 577.685 372.377 574.434 372.377C571.183 372.377 568.547 375.013 568.547 378.264C568.547 381.515 571.183 384.151 574.434 384.151C577.685 384.151 580.321 381.515 580.321 378.264Z" fill="#3AE4DF" />
                            <path d="M580.321 349.075C580.321 345.824 577.685 343.189 574.434 343.189C571.183 343.189 568.547 345.824 568.547 349.075C568.547 352.327 571.183 354.962 574.434 354.962C577.685 354.962 580.321 352.327 580.321 349.075Z" fill="#3AE4DF" />
                            <path d="M580.321 319.887C580.321 316.636 577.685 314 574.434 314C571.183 314 568.547 316.636 568.547 319.887C568.547 323.138 571.183 325.774 574.434 325.774C577.685 325.774 580.321 323.138 580.321 319.887Z" fill="#3AE4DF" />
                        </g>
                        <g>
                            <path d="M610 465.585C610 462.334 607.365 459.698 604.113 459.698C600.862 459.698 598.227 462.334 598.227 465.585C598.227 468.836 600.862 471.472 604.113 471.472C607.365 471.472 610 468.836 610 465.585Z" fill="#3AE4DF" />
                            <path d="M610 436.396C610 433.145 607.364 430.509 604.113 430.509C600.862 430.509 598.226 433.145 598.226 436.396C598.226 439.647 600.862 442.283 604.113 442.283C607.364 442.283 610 439.647 610 436.396Z" fill="#3AE4DF" />
                            <path d="M610 407.208C610 403.956 607.364 401.321 604.113 401.321C600.862 401.321 598.226 403.956 598.226 407.208C598.226 410.459 600.862 413.094 604.113 413.094C607.364 413.094 610 410.459 610 407.208Z" fill="#3AE4DF" />
                            <path d="M610 378.264C610 375.013 607.364 372.377 604.113 372.377C600.862 372.377 598.226 375.013 598.226 378.264C598.226 381.515 600.862 384.151 604.113 384.151C607.364 384.151 610 381.515 610 378.264Z" fill="#3AE4DF" />
                            <path d="M610 349.075C610 345.824 607.364 343.189 604.113 343.189C600.862 343.189 598.226 345.824 598.226 349.075C598.226 352.327 600.862 354.962 604.113 354.962C607.364 354.962 610 352.327 610 349.075Z" fill="#3AE4DF" />
                            <path d="M610 319.887C610 316.636 607.364 314 604.113 314C600.862 314 598.226 316.636 598.226 319.887C598.226 323.138 600.862 325.774 604.113 325.774C607.364 325.774 610 323.138 610 319.887Z" fill="#3AE4DF" />
                        </g>
                    </g>
                    <g id="group-grid1">
                        <g>
                            <path d="M35.7736 151.585C35.7736 148.334 33.138 145.698 29.8868 145.698C26.6356 145.698 24 148.334 24 151.585C24 154.836 26.6356 157.472 29.8868 157.472C33.138 157.472 35.7736 154.836 35.7736 151.585Z" fill="#FCDDA8" />
                            <path d="M35.7736 122.396C35.7736 119.145 33.138 116.509 29.8868 116.509C26.6356 116.509 24 119.145 24 122.396C24 125.647 26.6356 128.283 29.8868 128.283C33.138 128.283 35.7736 125.647 35.7736 122.396Z" fill="#FCDDA8" />
                            <path d="M35.7736 93.2076C35.7736 89.9565 33.138 87.3209 29.8868 87.3209C26.6356 87.3209 24 89.9565 24 93.2076C24 96.4588 26.6356 99.0944 29.8868 99.0944C33.138 99.0944 35.7736 96.4588 35.7736 93.2076Z" fill="#FCDDA8" />
                            <path d="M35.7736 64.2642C35.7736 61.013 33.138 58.3773 29.8868 58.3773C26.6356 58.3773 24 61.013 24 64.2642C24 67.5154 26.6356 70.151 29.8868 70.151C33.138 70.151 35.7736 67.5154 35.7736 64.2642Z" fill="#FCDDA8" />
                            <path d="M35.7736 35.0755C35.7736 31.8243 33.138 29.1887 29.8868 29.1887C26.6356 29.1887 24 31.8243 24 35.0755C24 38.3267 26.6356 40.9623 29.8868 40.9623C33.138 40.9623 35.7736 38.3267 35.7736 35.0755Z" fill="#FCDDA8" />
                            <path d="M35.7736 5.88681C35.7736 2.63562 33.138 2.95639e-05 29.8868 2.95639e-05C26.6356 2.95639e-05 24 2.63562 24 5.88681C24 9.138 26.6356 11.7736 29.8868 11.7736C33.138 11.7736 35.7736 9.138 35.7736 5.88681Z" fill="#FCDDA8" />
                        </g>
                        <g>
                            <path d="M65.2076 151.585C65.2076 148.334 62.572 145.698 59.3209 145.698C56.0697 145.698 53.4341 148.334 53.4341 151.585C53.4341 154.836 56.0697 157.472 59.3209 157.472C62.572 157.472 65.2076 154.836 65.2076 151.585Z" fill="#FCDDA8" />
                            <path d="M65.2076 122.396C65.2076 119.145 62.572 116.509 59.3209 116.509C56.0697 116.509 53.4341 119.145 53.4341 122.396C53.4341 125.647 56.0697 128.283 59.3209 128.283C62.572 128.283 65.2076 125.647 65.2076 122.396Z" fill="#FCDDA8" />
                            <path d="M65.2076 93.2076C65.2076 89.9565 62.572 87.3209 59.3209 87.3209C56.0697 87.3209 53.4341 89.9565 53.4341 93.2076C53.4341 96.4588 56.0697 99.0944 59.3209 99.0944C62.572 99.0944 65.2076 96.4588 65.2076 93.2076Z" fill="#FCDDA8" />
                            <path d="M65.2076 64.2642C65.2076 61.013 62.572 58.3773 59.3209 58.3773C56.0697 58.3773 53.4341 61.013 53.4341 64.2642C53.4341 67.5154 56.0697 70.151 59.3209 70.151C62.572 70.151 65.2076 67.5154 65.2076 64.2642Z" fill="#FCDDA8" />
                            <path d="M65.2076 35.0755C65.2076 31.8243 62.572 29.1887 59.3209 29.1887C56.0697 29.1887 53.4341 31.8243 53.4341 35.0755C53.4341 38.3267 56.0697 40.9623 59.3209 40.9623C62.572 40.9623 65.2076 38.3267 65.2076 35.0755Z" fill="#FCDDA8" />
                            <path d="M65.2076 5.88681C65.2076 2.63562 62.572 2.95639e-05 59.3209 2.95639e-05C56.0697 2.95639e-05 53.4341 2.63562 53.4341 5.88681C53.4341 9.138 56.0697 11.7736 59.3209 11.7736C62.572 11.7736 65.2076 9.138 65.2076 5.88681Z" fill="#FCDDA8" />
                        </g>
                        <g>
                            <path d="M94.8873 151.585C94.8873 148.334 92.2517 145.698 89.0005 145.698C85.7493 145.698 83.1137 148.334 83.1137 151.585C83.1137 154.836 85.7493 157.472 89.0005 157.472C92.2517 157.472 94.8873 154.836 94.8873 151.585Z" fill="#FCDDA8" />
                            <path d="M94.8869 122.396C94.8869 119.145 92.2513 116.509 89.0001 116.509C85.7489 116.509 83.1133 119.145 83.1133 122.396C83.1133 125.647 85.7489 128.283 89.0001 128.283C92.2513 128.283 94.8869 125.647 94.8869 122.396Z" fill="#FCDDA8" />
                            <path d="M94.8869 93.2076C94.8869 89.9565 92.2513 87.3209 89.0001 87.3209C85.7489 87.3209 83.1133 89.9565 83.1133 93.2076C83.1133 96.4588 85.7489 99.0944 89.0001 99.0944C92.2513 99.0944 94.8869 96.4588 94.8869 93.2076Z" fill="#FCDDA8" />
                            <path d="M94.8869 64.2642C94.8869 61.013 92.2513 58.3773 89.0001 58.3773C85.7489 58.3773 83.1133 61.013 83.1133 64.2642C83.1133 67.5154 85.7489 70.151 89.0001 70.151C92.2513 70.151 94.8869 67.5154 94.8869 64.2642Z" fill="#FCDDA8" />
                            <path d="M94.8869 35.0755C94.8869 31.8243 92.2513 29.1887 89.0001 29.1887C85.7489 29.1887 83.1133 31.8243 83.1133 35.0755C83.1133 38.3267 85.7489 40.9623 89.0001 40.9623C92.2513 40.9623 94.8869 38.3267 94.8869 35.0755Z" fill="#FCDDA8" />
                            <path d="M94.8869 5.88681C94.8869 2.63562 92.2513 2.95639e-05 89.0001 2.95639e-05C85.7489 2.95639e-05 83.1133 2.63562 83.1133 5.88681C83.1133 9.138 85.7489 11.7736 89.0001 11.7736C92.2513 11.7736 94.8869 9.138 94.8869 5.88681Z" fill="#FCDDA8" />
                        </g>
                        <g>
                            <path d="M124.321 151.585C124.321 148.334 121.685 145.698 118.434 145.698C115.183 145.698 112.547 148.334 112.547 151.585C112.547 154.836 115.183 157.472 118.434 157.472C121.685 157.472 124.321 154.836 124.321 151.585Z" fill="#FCDDA8" />
                            <path d="M124.321 122.396C124.321 119.145 121.685 116.509 118.434 116.509C115.183 116.509 112.547 119.145 112.547 122.396C112.547 125.647 115.183 128.283 118.434 128.283C121.685 128.283 124.321 125.647 124.321 122.396Z" fill="#FCDDA8" />
                            <path d="M124.321 93.2076C124.321 89.9565 121.685 87.3209 118.434 87.3209C115.183 87.3209 112.547 89.9565 112.547 93.2076C112.547 96.4588 115.183 99.0944 118.434 99.0944C121.685 99.0944 124.321 96.4588 124.321 93.2076Z" fill="#FCDDA8" />
                            <path d="M124.321 64.2642C124.321 61.013 121.685 58.3773 118.434 58.3773C115.183 58.3773 112.547 61.013 112.547 64.2642C112.547 67.5154 115.183 70.151 118.434 70.151C121.685 70.151 124.321 67.5154 124.321 64.2642Z" fill="#FCDDA8" />
                            <path d="M124.321 35.0755C124.321 31.8243 121.685 29.1887 118.434 29.1887C115.183 29.1887 112.547 31.8243 112.547 35.0755C112.547 38.3267 115.183 40.9623 118.434 40.9623C121.685 40.9623 124.321 38.3267 124.321 35.0755Z" fill="#FCDDA8" />
                            <path d="M124.321 5.88681C124.321 2.63562 121.685 2.95639e-05 118.434 2.95639e-05C115.183 2.95639e-05 112.547 2.63562 112.547 5.88681C112.547 9.138 115.183 11.7736 118.434 11.7736C121.685 11.7736 124.321 9.138 124.321 5.88681Z" fill="#FCDDA8" />
                        </g>
                        <g>
                            <path d="M154 151.585C154 148.334 151.365 145.698 148.113 145.698C144.862 145.698 142.227 148.334 142.227 151.585C142.227 154.836 144.862 157.472 148.113 157.472C151.365 157.472 154 154.836 154 151.585Z" fill="#FCDDA8" />
                            <path d="M154 122.396C154 119.145 151.364 116.509 148.113 116.509C144.862 116.509 142.226 119.145 142.226 122.396C142.226 125.647 144.862 128.283 148.113 128.283C151.364 128.283 154 125.647 154 122.396Z" fill="#FCDDA8" />
                            <path d="M154 93.2076C154 89.9565 151.364 87.3209 148.113 87.3209C144.862 87.3209 142.226 89.9565 142.226 93.2076C142.226 96.4588 144.862 99.0944 148.113 99.0944C151.364 99.0944 154 96.4588 154 93.2076Z" fill="#FCDDA8" />
                            <path d="M154 64.2642C154 61.013 151.364 58.3773 148.113 58.3773C144.862 58.3773 142.226 61.013 142.226 64.2642C142.226 67.5154 144.862 70.151 148.113 70.151C151.364 70.151 154 67.5154 154 64.2642Z" fill="#FCDDA8" />
                            <path d="M154 35.0755C154 31.8243 151.364 29.1887 148.113 29.1887C144.862 29.1887 142.226 31.8243 142.226 35.0755C142.226 38.3267 144.862 40.9623 148.113 40.9623C151.364 40.9623 154 38.3267 154 35.0755Z" fill="#FCDDA8" />
                            <path d="M154 5.88681C154 2.63562 151.364 2.95639e-05 148.113 2.95639e-05C144.862 2.95639e-05 142.226 2.63562 142.226 5.88681C142.226 9.138 144.862 11.7736 148.113 11.7736C151.364 11.7736 154 9.138 154 5.88681Z" fill="#FCDDA8" />
                        </g>
                    </g>
                    <g id="main-hero" clipPath="url(#clip0)">
                        <g id="group-search">
                            <path d="M353.606 200.676C364.339 200.676 373.041 191.469 373.041 180.111C373.041 168.753 364.339 159.545 353.606 159.545C342.873 159.545 334.172 168.753 334.172 180.111C334.172 191.469 342.873 200.676 353.606 200.676Z" fill="#E6E6E6" />
                            <path d="M401.237 206.538L380.927 185.047C382.484 182.485 383.539 179.618 384.029 176.616C384.52 173.615 384.436 170.539 383.783 167.573C383.13 164.606 381.921 161.808 380.227 159.345C378.533 156.882 376.39 154.803 373.923 153.233C369.278 150.297 363.761 149.313 358.464 150.478C353.167 151.642 348.476 154.869 345.32 159.52C342.417 163.828 341.023 169.072 341.377 174.35C341.731 179.628 343.812 184.61 347.261 188.441C350.711 192.271 355.314 194.71 360.279 195.338C365.244 195.967 370.261 194.745 374.467 191.884L394.776 213.375C395.633 214.281 396.795 214.789 398.006 214.789C399.217 214.789 400.379 214.279 401.235 213.373C402.091 212.467 402.573 211.238 402.573 209.956C402.573 208.674 402.093 207.445 401.237 206.538V206.538ZM373.708 184.245C371.192 186.908 367.881 188.565 364.339 188.934C360.797 189.304 357.244 188.362 354.285 186.27C351.326 184.177 349.144 181.064 348.111 177.46C347.077 173.856 347.257 169.985 348.619 166.506C349.981 163.027 352.441 160.155 355.579 158.379C358.718 156.604 362.341 156.035 365.832 156.77C369.322 157.505 372.464 159.497 374.722 162.408C376.98 165.32 378.214 168.969 378.214 172.735C378.216 174.873 377.82 176.99 377.046 178.966C376.273 180.941 375.139 182.735 373.708 184.245V184.245Z" fill="#3F3D56" />
                        </g>
                        <path d="M548.458 238.239C600.397 299.02 449.834 386.615 328.176 386.615C206.517 386.615 122.349 318.745 107.894 238.239C72.8452 43.0406 406.515 -81.0265 328.176 89.8633C213.987 338.955 507.554 190.373 548.458 238.239Z" fill="#E6E6E6" />
                        <path d="M525.153 252.624C577.092 313.405 426.53 401 304.871 401C183.213 401 99.0445 333.13 84.5895 252.624C49.541 57.4256 383.211 -66.6415 304.871 104.248C190.682 353.34 484.25 204.758 525.153 252.624Z" fill="#3F3D56" />
                        <g id="group-planet">
                            <path d="M154.628 110.119C118.183 108.421 89.9247 100.102 90.2959 91.1802C90.5185 85.8312 100.833 81.5298 118.594 79.3796C118.658 79.3714 118.722 79.3767 118.784 79.395C118.846 79.4133 118.903 79.4444 118.953 79.4863C119.004 79.5283 119.046 79.5804 119.077 79.6396C119.108 79.6988 119.128 79.7639 119.135 79.8312C119.142 79.8985 119.137 79.9667 119.119 80.0318C119.101 80.0969 119.072 80.1577 119.032 80.2106C118.992 80.2635 118.942 80.3075 118.886 80.3401C118.83 80.3727 118.768 80.3932 118.705 80.4004C101.973 82.4261 91.4595 86.5741 91.266 91.2254C90.9303 99.2936 119.966 107.476 154.671 109.093C189.376 110.71 218.979 105.26 219.315 97.1915C219.509 92.5206 209.315 87.3965 192.71 83.8194C192.647 83.8061 192.588 83.7798 192.535 83.7421C192.482 83.7045 192.436 83.6561 192.401 83.5997C192.366 83.5434 192.341 83.4803 192.329 83.4139C192.317 83.3476 192.317 83.2793 192.33 83.2131C192.343 83.1469 192.368 83.0839 192.403 83.0279C192.439 82.9719 192.485 82.9239 192.538 82.8867C192.592 82.8495 192.651 82.8238 192.714 82.811C192.777 82.7983 192.841 82.7988 192.904 82.8125C210.528 86.6094 220.508 91.8668 220.285 97.2367C219.913 106.159 191.074 111.817 154.628 110.119Z" fill="#5197DB" />
                            <path d="M122.259 111.614C125.308 117.742 129.825 122.917 135.357 126.618C140.889 130.32 147.242 132.42 153.782 132.707C160.322 132.994 166.818 131.459 172.621 128.255C178.424 125.051 183.33 120.291 186.848 114.45C165.286 114.758 143.724 113.811 122.259 111.614V111.614Z" fill="#5197DB" />
                            <path d="M190.88 103.644C192.715 97.8197 193.244 91.6237 192.424 85.5461C191.605 79.4685 189.46 73.6762 186.16 68.6274C182.859 63.5787 178.493 59.4121 173.408 56.4576C168.322 53.503 162.657 51.8416 156.859 51.6047C151.062 51.3678 145.292 52.5619 140.007 55.0927C134.721 57.6234 130.064 61.4213 126.406 66.1856C122.747 70.95 120.186 76.5501 118.927 82.5427C117.667 88.5354 117.742 94.756 119.147 100.712C142.838 104.968 166.95 105.953 190.88 103.644Z" fill="#5197DB" />
                            <path d="M163.969 77.1239C166.382 77.1239 168.339 75.0537 168.339 72.5001C168.339 69.9465 166.382 67.8763 163.969 67.8763C161.556 67.8763 159.6 69.9465 159.6 72.5001C159.6 75.0537 161.556 77.1239 163.969 77.1239Z" fill="white" />
                            <path d="M141.481 95.1004C145.503 95.1004 148.763 91.6501 148.763 87.3941C148.763 83.138 145.503 79.6878 141.481 79.6878C137.459 79.6878 134.198 83.138 134.198 87.3941C134.198 91.6501 137.459 95.1004 141.481 95.1004Z" fill="white" />
                            <path d="M154.036 129.115C156.449 129.115 158.405 127.044 158.405 124.491C158.405 121.937 156.449 119.867 154.036 119.867C151.623 119.867 149.666 121.937 149.666 124.491C149.666 127.044 151.623 129.115 154.036 129.115Z" fill="white" />
                        </g>
                        <path d="M251.394 87.5516C254.075 87.5516 256.249 85.2515 256.249 82.4142C256.249 79.5769 254.075 77.2768 251.394 77.2768C248.713 77.2768 246.539 79.5769 246.539 82.4142C246.539 85.2515 248.713 87.5516 251.394 87.5516Z" fill="#5197DB" />
                        <path d="M141.671 244.76C143.279 244.76 144.584 243.38 144.584 241.677C144.584 239.975 143.279 238.595 141.671 238.595C140.062 238.595 138.758 239.975 138.758 241.677C138.758 243.38 140.062 244.76 141.671 244.76Z" fill="#E6E6E6" />
                        <path d="M345.582 350.593C347.19 350.593 348.495 349.213 348.495 347.51C348.495 345.808 347.19 344.428 345.582 344.428C343.973 344.428 342.669 345.808 342.669 347.51C342.669 349.213 343.973 350.593 345.582 350.593Z" fill="#E6E6E6" />
                        <path d="M155.75 185.165C156.555 185.165 157.207 184.475 157.207 183.623C157.207 182.772 156.555 182.082 155.75 182.082C154.946 182.082 154.294 182.772 154.294 183.623C154.294 184.475 154.946 185.165 155.75 185.165Z" fill="#E6E6E6" />
                        <path d="M276.155 300.245C276.959 300.245 277.611 299.555 277.611 298.704C277.611 297.853 276.959 297.162 276.155 297.162C275.35 297.162 274.698 297.853 274.698 298.704C274.698 299.555 275.35 300.245 276.155 300.245Z" fill="#E6E6E6" />
                        <path d="M495.116 285.346C495.921 285.346 496.573 284.656 496.573 283.805C496.573 282.954 495.921 282.264 495.116 282.264C494.312 282.264 493.66 282.954 493.66 283.805C493.66 284.656 494.312 285.346 495.116 285.346Z" fill="#E6E6E6" />
                        <path d="M426.661 331.07C427.465 331.07 428.117 330.38 428.117 329.529C428.117 328.678 427.465 327.988 426.661 327.988C425.856 327.988 425.204 328.678 425.204 329.529C425.204 330.38 425.856 331.07 426.661 331.07Z" fill="#E6E6E6" />
                        <path d="M355.292 275.585C356.096 275.585 356.748 274.895 356.748 274.044C356.748 273.192 356.096 272.502 355.292 272.502C354.487 272.502 353.835 273.192 353.835 274.044C353.835 274.895 354.487 275.585 355.292 275.585Z" fill="#E6E6E6" />
                        <path d="M263.046 123.514C263.851 123.514 264.503 122.824 264.503 121.973C264.503 121.122 263.851 120.432 263.046 120.432C262.242 120.432 261.59 121.122 261.59 121.973C261.59 122.824 262.242 123.514 263.046 123.514Z" fill="#E6E6E6" />
                        <path d="M274.698 47.4791C275.503 47.4791 276.155 46.789 276.155 45.9378C276.155 45.0866 275.503 44.3965 274.698 44.3965C273.894 44.3965 273.242 45.0866 273.242 45.9378C273.242 46.789 273.894 47.4791 274.698 47.4791Z" fill="#E6E6E6" />
                        <path d="M267.901 367.547C268.706 367.547 269.358 366.856 269.358 366.005C269.358 365.154 268.706 364.464 267.901 364.464C267.097 364.464 266.445 365.154 266.445 366.005C266.445 366.856 267.097 367.547 267.901 367.547Z" fill="#E6E6E6" />
                        <path d="M196.047 335.18C196.851 335.18 197.503 334.49 197.503 333.639C197.503 332.788 196.851 332.098 196.047 332.098C195.242 332.098 194.59 332.788 194.59 333.639C194.59 334.49 195.242 335.18 196.047 335.18Z" fill="#E6E6E6" />
                        <path d="M423.748 279.695C424.552 279.695 425.204 279.005 425.204 278.154C425.204 277.302 424.552 276.612 423.748 276.612C422.943 276.612 422.291 277.302 422.291 278.154C422.291 279.005 422.943 279.695 423.748 279.695Z" fill="#E6E6E6" />
                        <g id="group-location">
                            <path d="M252.851 195.44C252.851 209.249 232.674 241.429 226.777 250.538C226.599 250.813 226.36 251.038 226.082 251.194C225.803 251.35 225.492 251.431 225.177 251.431C224.862 251.431 224.551 251.35 224.273 251.194C223.994 251.038 223.755 250.813 223.577 250.538C217.681 241.429 197.503 209.249 197.503 195.44C197.503 191.594 198.219 187.786 199.61 184.233C201.001 180.68 203.039 177.452 205.609 174.733C208.179 172.014 211.229 169.857 214.587 168.385C217.944 166.913 221.543 166.156 225.177 166.156C228.811 166.156 232.41 166.913 235.767 168.385C239.125 169.857 242.176 172.014 244.745 174.733C247.315 177.452 249.353 180.68 250.744 184.233C252.135 187.786 252.851 191.594 252.851 195.44V195.44Z" fill="white" />
                            <path d="M225.177 208.283C232.953 208.283 239.257 201.613 239.257 193.385C239.257 185.156 232.953 178.486 225.177 178.486C217.401 178.486 211.097 185.156 211.097 193.385C211.097 201.613 217.401 208.283 225.177 208.283Z" fill="#5197DB" />
                            <path d="M224.934 267.365C233.917 267.365 241.199 265.87 241.199 264.026C241.199 262.181 233.917 260.686 224.934 260.686C215.952 260.686 208.67 262.181 208.67 264.026C208.67 265.87 215.952 267.365 224.934 267.365Z" fill="white" />
                        </g>
                        <path d="M478.584 172.332C478.461 172.584 478.357 172.847 478.273 173.117L455.074 179.938L450.894 175.609L443.895 181.431L450.592 189.856C451.133 190.537 451.868 191.013 452.687 191.214C453.506 191.415 454.364 191.33 455.133 190.971L480.193 179.265C481.043 179.889 482.052 180.225 483.087 180.227C484.122 180.23 485.133 179.899 485.986 179.278C486.839 178.658 487.493 177.777 487.861 176.754C488.23 175.73 488.295 174.613 488.048 173.549C487.801 172.485 487.254 171.527 486.48 170.8C485.706 170.073 484.741 169.613 483.713 169.481C482.686 169.349 481.645 169.551 480.729 170.06C479.813 170.569 479.065 171.362 478.584 172.332H478.584Z" fill="#FFB8B8" />
                        <path d="M454.257 180.338L445.549 187.51C445.302 187.714 445.015 187.859 444.71 187.935C444.404 188.012 444.086 188.017 443.779 187.952C443.471 187.887 443.18 187.752 442.926 187.557C442.671 187.362 442.46 187.112 442.305 186.823L436.894 176.688C435.914 175.34 435.479 173.637 435.685 171.951C435.89 170.265 436.719 168.734 437.989 167.694C439.26 166.654 440.869 166.189 442.463 166.402C444.056 166.615 445.505 167.488 446.492 168.83L454.424 176.842C454.651 177.071 454.829 177.349 454.945 177.658C455.061 177.967 455.113 178.298 455.097 178.63C455.081 178.962 454.998 179.286 454.853 179.581C454.708 179.876 454.505 180.134 454.257 180.338V180.338Z" fill="#5197DB" />
                        <path d="M480.809 168.94L489.639 173.144C490.009 173.32 490.297 173.644 490.441 174.045C490.585 174.446 490.572 174.891 490.406 175.283L489.361 177.742C489.484 177.801 489.58 177.909 489.627 178.042C489.675 178.176 489.671 178.324 489.616 178.455L489.198 179.438C489.142 179.569 489.04 179.67 488.914 179.721C488.788 179.771 488.648 179.767 488.524 179.709L488.106 180.693C488.229 180.752 488.325 180.86 488.373 180.993C488.421 181.127 488.417 181.275 488.362 181.406L487.944 182.389C487.888 182.519 487.786 182.621 487.659 182.672C487.533 182.722 487.393 182.718 487.27 182.66L481.624 195.938C481.458 196.33 481.151 196.635 480.772 196.787C480.393 196.939 479.972 196.926 479.603 196.75L470.772 192.546C470.402 192.37 470.114 192.046 469.97 191.644C469.826 191.243 469.839 190.798 470.005 190.407L478.787 169.751C478.954 169.36 479.26 169.055 479.639 168.902C480.018 168.75 480.439 168.764 480.809 168.94V168.94Z" fill="#3F3D56" />
                        <path d="M472.376 191.238L479.459 194.613C479.814 194.781 480.218 194.794 480.581 194.648C480.945 194.503 481.24 194.211 481.401 193.837L484.673 186.136L485.809 183.467L488.77 176.499C488.928 176.124 488.94 175.698 488.803 175.314C488.665 174.93 488.39 174.62 488.036 174.45L485.809 173.387L480.947 171.074C480.593 170.906 480.189 170.894 479.826 171.041C479.463 171.188 479.17 171.481 479.011 171.856L476.147 178.591L472.885 186.26L471.642 189.188C471.483 189.563 471.471 189.989 471.609 190.373C471.746 190.757 472.022 191.068 472.376 191.238V191.238Z" fill="#F2F2F2" />
                        <path d="M457.574 286.654L463.526 286.653L466.358 262.359L457.573 262.359L457.574 286.654Z" fill="#FFB8B8" />
                        <path d="M456.056 284.597L467.777 284.597H467.778C468.759 284.597 469.73 284.801 470.637 285.198C471.543 285.596 472.366 286.178 473.06 286.912C473.754 287.646 474.304 288.517 474.679 289.476C475.055 290.435 475.248 291.463 475.248 292.501V292.758L456.056 292.759L456.056 284.597Z" fill="#2F2E41" />
                        <path d="M473.11 285.112L479.062 285.112L481.894 260.818L473.109 260.818L473.11 285.112Z" fill="#FFB8B8" />
                        <path d="M471.592 283.056L483.313 283.055H483.314C484.295 283.055 485.266 283.26 486.173 283.657C487.079 284.054 487.902 284.637 488.596 285.371C489.29 286.105 489.84 286.976 490.215 287.935C490.591 288.894 490.784 289.922 490.784 290.96V291.217L471.592 291.218L471.592 283.056Z" fill="#2F2E41" />
                        <path d="M430.875 229.645C432.143 233.623 434.548 237.086 437.758 239.553C440.968 242.021 444.823 243.372 448.79 243.419L449.091 243.424C452.164 243.517 455.771 242.469 459.311 240.963C466.302 237.989 473.016 233.226 474.798 231.916L471.778 262.633L470.555 275.087C470.524 275.409 470.557 275.734 470.652 276.042C470.748 276.35 470.903 276.633 471.107 276.874C471.312 277.114 471.563 277.307 471.842 277.439C472.121 277.571 472.424 277.639 472.73 277.64H480.27C480.753 277.64 481.223 277.471 481.606 277.159C481.989 276.846 482.264 276.409 482.386 275.914L494.835 225.746C495.208 224.244 495.238 222.67 494.922 221.154C494.607 219.638 493.954 218.223 493.019 217.026C492.084 215.83 490.893 214.886 489.544 214.273C488.196 213.661 486.729 213.397 485.266 213.503L459.408 215.378L461.214 207.734L438.133 206.11L438.065 206.162C437.512 206.588 436.973 207.035 436.458 207.503C435.171 208.654 434.031 209.977 433.064 211.438C431.336 214.059 430.234 217.085 429.852 220.256C429.471 223.428 429.822 226.649 430.875 229.645Z" fill="#2F2E41" />
                        <path d="M430.875 229.645C432.143 233.623 434.548 237.086 437.758 239.553C440.968 242.021 444.823 243.372 448.79 243.419C452.583 241.387 456.244 239.089 459.748 236.54L459.311 240.963L455.504 279.71C455.473 280.033 455.507 280.358 455.602 280.666C455.697 280.974 455.852 281.257 456.057 281.497C456.262 281.738 456.512 281.93 456.791 282.062C457.071 282.194 457.373 282.263 457.679 282.264H465.219C465.703 282.264 466.173 282.095 466.556 281.782C466.939 281.47 467.213 281.032 467.336 280.538L471.778 262.633L479.784 230.37C480.158 228.868 480.188 227.294 479.872 225.778C479.556 224.261 478.904 222.846 477.968 221.65C477.033 220.453 475.842 219.51 474.494 218.897C473.146 218.285 471.679 218.021 470.215 218.127L444.357 220.002L446.163 212.358L433.064 211.438C431.336 214.059 430.234 217.085 429.852 220.256C429.471 223.428 429.822 226.649 430.875 229.645V229.645Z" fill="#2F2E41" />
                        <path d="M436.425 209.275L436.251 209.253L432.224 188.299C432.19 188.117 428.897 170.044 438.99 160.596L439.166 159.302C439.211 158.972 439.323 158.655 439.495 158.374C439.667 158.094 439.894 157.856 440.161 157.677C440.429 157.499 440.729 157.383 441.042 157.34C441.355 157.296 441.674 157.324 441.976 157.423L451.484 160.544C452.022 160.72 452.476 161.109 452.749 161.63C453.022 162.151 453.094 162.764 452.95 163.34L452.026 167.06C453.307 168.653 468.394 187.874 463.139 202.682L460.785 212.418L436.425 209.275Z" fill="#5197DB" />
                        <path d="M475.906 192.922C475.679 193.073 475.463 193.243 475.261 193.43L452.007 186.825L450.487 180.848L441.662 182.097L443.382 192.954C443.521 193.832 443.925 194.637 444.533 195.251C445.142 195.864 445.922 196.252 446.757 196.357L473.961 199.757C474.393 200.752 475.101 201.585 475.991 202.143C476.881 202.702 477.911 202.961 478.943 202.885C479.976 202.81 480.962 202.403 481.771 201.72C482.58 201.037 483.173 200.109 483.471 199.061C483.77 198.012 483.759 196.892 483.442 195.85C483.124 194.808 482.514 193.893 481.693 193.226C480.872 192.56 479.878 192.173 478.845 192.119C477.811 192.065 476.786 192.345 475.906 192.922H475.906Z" fill="#FFB8B8" />
                        <path d="M451.111 186.729L440.167 188.221C439.856 188.263 439.539 188.234 439.239 188.136C438.94 188.037 438.663 187.871 438.43 187.649C438.196 187.428 438.01 187.155 437.885 186.851C437.759 186.546 437.698 186.216 437.703 185.884L437.912 174.245C437.716 172.558 438.16 170.858 439.147 169.516C440.134 168.175 441.583 167.303 443.177 167.091C444.771 166.878 446.379 167.344 447.649 168.384C448.919 169.425 449.747 170.956 449.952 172.642L452.934 183.808C453.02 184.128 453.039 184.463 452.99 184.792C452.942 185.12 452.828 185.433 452.655 185.711C452.482 185.988 452.254 186.222 451.988 186.398C451.721 186.574 451.422 186.687 451.111 186.729V186.729Z" fill="#5197DB" />
                        <path d="M448.03 154.579C454.616 154.579 459.955 148.93 459.955 141.961C459.955 134.992 454.616 129.343 448.03 129.343C441.445 129.343 436.106 134.992 436.106 141.961C436.106 148.93 441.445 154.579 448.03 154.579Z" fill="#FFB8B8" />
                        <path d="M447.403 143.015L445.91 140.138C443.082 152.33 448.077 162.421 448.077 162.421L428.69 152.865L428.875 149.474L426.956 151.778L424.2 150.17L423.836 147.971L421.755 148.516L429.35 133.932C436.721 120.054 447.437 125.353 447.437 125.353C464.486 124.495 462.404 142.294 462.404 142.294L447.403 143.015Z" fill="#2F2E41" />
                        <path d="M311.662 237.048C314.411 235.183 311.068 224.473 304.194 213.127C297.321 201.78 289.52 194.094 286.77 195.959C284.021 197.824 287.364 208.534 294.238 219.88C301.112 231.227 308.913 238.913 311.662 237.048Z" fill="#3F3D56" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="477" height="392" fill="white" transform="translate(82 9)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default HeroImage;