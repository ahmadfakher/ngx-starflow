# ⭐ ngx-starflow

**ngx-starflow** is a lightweight Angular component for displaying **fractional star ratings with full precision** — not limited to half-stars.

It is built for performance, flexibility, and smooth visual accuracy using pure CSS (no Tailwind dependency).

---

## ✨ Features

- 🎯 **Fractional ratings support** (e.g. 3.7, 4.23, 2.95)
- ⚡ Lightweight & standalone Angular component
- 🎨 Fully customizable (size, spacing, icons, colors)
- 🚫 No Tailwind dependency
- ⭐ Font Awesome based rendering
- 🧠 Simple and developer-friendly API

---

## 📦 Installation

```bash
npm install ngx-starflow
```

---

## ⚙️ Requirements

- Angular 17+
- Font Awesome

### Install Font Awesome

```bash
npm install @fortawesome/fontawesome-free
```

Add it to your global styles:

```json
"styles": [
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
]
```

---

## 🚀 Usage

### 1. Import the component

```ts
import { NgxStarflowRating } from 'ngx-starflow';
```

---

### 2. Use in a standalone component

```ts
@Component({
  standalone: true,
  imports: [NgxStarflowRating],
  template: ` <ngx-starflow [rating]="3.7"></ngx-starflow> `,
})
export class AppComponent {}
```

---

## 🧩 Inputs

| Input             | Required | Type     | Default              | Description                   |
| ----------------- | -------- | -------- | -------------------- | ----------------------------- |
| `rating`          | ✔        | `number` | —                    | Rating value (0 → 5)          |
| `size`            | ✖        | `string` | `'md'`               | Controls star size            |
| `spacing`         | ✖        | `number` | `0`                  | Space between stars           |
| `bgColor`         | ✖        | `string` | `#737373`            | Color of inactive stars       |
| `fgColor`         | ✖        | `string` | `#f0b100`            | Color of active stars         |
| `bgIconClass`     | ✖        | `string` | `fa-regular fa-star` | Icon class for inactive stars |
| `activeIconClass` | ✖        | `string` | `fa-solid fa-star`   | Icon class for active stars   |

---

## 🎨 Size Options

```html
<ngx-starflow size="xs"></ngx-starflow>
<!-- 12px -->
<ngx-starflow size="sm"></ngx-starflow>
<!-- 14px -->
<ngx-starflow size="md"></ngx-starflow>
<!-- 16px (default) -->
<ngx-starflow size="lg"></ngx-starflow>
<!-- 18px -->
<ngx-starflow size="xl"></ngx-starflow>
<!-- 20px -->
<ngx-starflow size="2xl"></ngx-starflow>
<!-- 24px -->
<ngx-starflow size="3xl"></ngx-starflow>
<!-- 30px -->
<ngx-starflow size="4xl"></ngx-starflow>
<!-- 36px -->
```

---

## 📏 Spacing Options

```html
<ngx-starflow [spacing]="0"></ngx-starflow>
<!-- none -->
<ngx-starflow [spacing]="1"></ngx-starflow>
<!-- 4px -->
<ngx-starflow [spacing]="2"></ngx-starflow>
<!-- 8px -->
<ngx-starflow [spacing]="3"></ngx-starflow>
<!-- 12px -->
<ngx-starflow [spacing]="4"></ngx-starflow>
<!-- 16px -->
<ngx-starflow [spacing]="5"></ngx-starflow>
<!-- evenly distributed -->
```

---

## 🎨 Customization

### Colors

Any valid CSS color value:

```html
<ngx-starflow bgColor="#ccc" fgColor="gold"></ngx-starflow>
```

---

### Icons

Any valid Font Awesome class:

```html
<ngx-starflow bgIconClass="fa-regular fa-star" activeIconClass="fa-solid fa-star"> </ngx-starflow>
```

---

## 🧠 How it works

The component renders two overlapping layers:

- Background stars (inactive state)
- Foreground stars (active rating)

The active layer is revealed using:

```css
clip-path: inset(...);
```

This enables smooth **fractional rendering without extra DOM complexity**.

---

## 💡 Example

```html
<ngx-starflow [rating]="4.3" size="lg" [spacing]="2"> </ngx-starflow>
```

---

## ⚠️ Notes

- Rating must be between **0 and 5**
- Uses Font Awesome for icons
- Fully self-contained styling (no Tailwind required)

---

## 📌 Roadmap

- [ ] Hover-based rating input mode
- [ ] Smooth animations
- [ ] RTL support

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

---

## 📄 License

MIT
