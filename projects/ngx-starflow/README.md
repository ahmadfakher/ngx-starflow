# ⭐ ngx-starflow

![npm version](https://img.shields.io/npm/v/ngx-starflow)
![npm downloads](https://img.shields.io/npm/dm/ngx-starflow)
![GitHub release](https://img.shields.io/github/v/release/ahmadfakher/ngx-starflow)
![license](https://img.shields.io/npm/l/ngx-starflow)

**ngx-starflow v2.0** is a lightweight Angular star rating library with **fractional precision display** and a new **interactive input component**.

It provides:

- ⭐ `<starflow>` → display-only rating component
- ✍️ `<starflow-input>` → interactive rating input component

---

# 🚀 What’s new in v2.0

## ✨ New components

- `<starflow>` (replaces `ngx-starflow`)
- `<starflow-input>` (new rating input component)

## 🧠 Improvements

- Bug fixes & stability improvements
- Better Angular signals support
- Improved form handling
- Clear separation between display and input components

---

# ✨ Features

- 🎯 Fractional ratings support (e.g. 3.7, 4.25)
- ⚡ Lightweight standalone Angular components
- 🎨 Fully customizable (size, spacing, colors, icons)
- 🚫 No Tailwind dependency
- ⭐ Font Awesome based rendering
- 🔁 Reactive Forms + Output support
- 🧩 Separate display & input components

---

# 📦 Installation

```bash
npm install ngx-starflow
```

---

# ⚙️ Requirements

- Angular 17+
- Font Awesome

## Install Font Awesome

```bash
npm install @fortawesome/fontawesome-free
```

Add to your `angular.json`:

```json
"styles": [
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
]
```

---

# ⭐ Starflow (Display Component)

## Import

```ts
import { Starflow } from 'ngx-starflow';
```

## Usage

```ts
@Component({
  standalone: true,
  imports: [Starflow],
  template: `<starflow [rating]="4.3"></starflow>`,
})
export class AppComponent {}
```

---

## Inputs

| Input         | Type   | Default              | Description         |
| ------------- | ------ | -------------------- | ------------------- |
| `rating`      | number | —                    | Rating (0 → 5)      |
| `size`        | string | `md`                 | Star size           |
| `spacing`     | number | `0`                  | Gap between stars   |
| `bgColor`     | string | `#737373`            | Inactive star color |
| `activeColor` | string | `#f0b100`            | Active star color   |
| `iconClass`   | string | `fa-regular fa-star` | Star icon class     |

---

## Example

```html
<starflow [rating]="3.8" size="lg" [spacing]="2"></starflow>
```

---

# ✍️ Starflow Input Component

## Import

```ts
import { StarflowInput } from 'ngx-starflow';
```

## Usage

```ts
@Component({
  standalone: true,
  imports: [StarflowInput],
  template: ` <starflow-input (ratingChange)="onRatingChange($event)"> </starflow-input> `,
})
export class AppComponent {
  onRatingChange(value: number) {
    console.log(value);
  }
}
```

---

## Outputs

| Output         | Type   | Description        |
| -------------- | ------ | ------------------ |
| `ratingChange` | number | Emits rating value |

---

## Inputs

| Input         | Type    | Default              | Description            |
| ------------- | ------- | -------------------- | ---------------------- |
| `required`    | boolean | `false`              | Required validation    |
| `size`        | string  | `md`                 | Star size              |
| `spacing`     | number  | `0`                  | Gap between stars      |
| `bgColor`     | string  | `#737373`            | Background stars color |
| `hoverColor`  | string  | `#f0b1004D`          | Hover color            |
| `activeColor` | string  | `#f0b100`            | Active color           |
| `iconClass`   | string  | `fa-regular fa-star` | Star icon class        |

---

## Example

```html
<starflow-input [required]="true" size="lg" [spacing]="2" (ratingChange)="onRatingChange($event)">
</starflow-input>
```

---

# 🧠 Validation

Built-in validation:

- required
- min (0)
- max (5)

Errors:

- Rating is required
- Rating must be between 0 and 5

---

# 🎨 Size Options

- xs → 12px
- sm → 14px
- md → 16px (default)
- lg → 18px
- xl → 20px
- 2xl → 24px
- 3xl → 30px
- 4xl → 36px

---

# 📏 Spacing Options

- 0 → none
- 1 → 4px
- 2 → 8px
- 3 → 12px
- 4 → 16px
- 5 → evenly spaced

---

# 🎨 Customization

```html
<starflow bgColor="#ccc" activeColor="gold"></starflow>
```

---

# 🧠 How it works

- Background stars (inactive layer)
- Foreground stars (active layer)
- Fractional rendering using CSS clipping (`clip-path`)

---

# 📌 Roadmap

- [ ] Two-way binding `[(rating)]`
- [ ] Half-star support
- [ ] Animations
- [ ] ControlValueAccessor support
- [ ] RTL support

---

# 🤝 Contributing

Pull requests and issues are welcome.

---

# 📄 License

MIT
