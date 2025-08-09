# 📸 4WARM Images Directory

## 📁 **Folder Structure**

### `/public/images/`
Thư mục chính chứa tất cả hình ảnh cho website 4WARM

```
public/images/
├── hero/              # Hình ảnh cho Hero section
├── about/             # Hình ảnh cho About section  
├── photography/       # Portfolio photography images
├── videography/       # Video thumbnails và covers
└── README.md          # File hướng dẫn này
```

---

## 🎯 **Hướng dẫn sử dụng**

### **1. Hero Section** (`/hero/`)
- **Background images**: Hình nền cho hero section
- **Logo variants**: Các phiên bản logo 4WARM
- **Overlay images**: Hình ảnh overlay hoặc decorative elements

**Recommended sizes:**
- Background: 1920x1080px (Full HD)
- Logo: 512x512px (PNG với background trong suốt)

### **2. About Section** (`/about/`)
- **Team photos**: Hình ảnh team 4WARM
- **Studio photos**: Hình ảnh studio, workspace
- **Behind-the-scenes**: Hình ảnh làm việc

**Recommended sizes:**
- Portrait: 800x600px
- Studio photos: 1200x800px

### **3. Photography Portfolio** (`/photography/`)
- **Portfolio images**: Các tác phẩm photography chính
- **Category folders**: Có thể tạo sub-folders theo category
  - `weddings/`
  - `portraits/`
  - `events/`
  - `commercial/`

**Recommended sizes:**
- Thumbnails: 600x400px
- Full size: 1920x1280px
- Format: JPG (optimized), WebP (preferred)

### **4. Videography** (`/videography/`)
- **Video thumbnails**: Thumbnail cho video portfolio
- **Video covers**: Cover images cho video galleries
- **Behind-the-scenes**: Hình ảnh quay phim

**Recommended sizes:**
- Thumbnails: 640x360px (16:9 ratio)
- Covers: 1280x720px

---

## 🚀 **Cách sử dụng trong code**

### **Next.js Image Component**
```jsx
import Image from 'next/image';

// Ví dụ sử dụng
<Image 
  src="/images/photography/wedding-01.jpg"
  alt="Wedding Photography"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

### **Background Images với Tailwind**
```jsx
<div 
  className="bg-cover bg-center h-96"
  style={{backgroundImage: "url('/images/hero/hero-bg.jpg')"}}
>
  Content
</div>
```

### **Dynamic imports**
```jsx
// Cho gallery hoặc carousel
const images = [
  '/images/photography/photo-1.jpg',
  '/images/photography/photo-2.jpg',
  '/images/photography/photo-3.jpg',
];
```

---

## 📊 **Tối ưu hóa hình ảnh**

### **Recommended formats:**
- **WebP**: Ưu tiên cho web (smaller file size)
- **JPG**: Cho photography với quality 80-85%
- **PNG**: Cho logos và graphics có transparency

### **Image optimization tools:**
- **Online**: TinyPNG, Squoosh.app
- **CLI**: `next/image` tự động optimize
- **Batch**: ImageOptim, Photoshop Export for Web

### **File naming convention:**
- Sử dụng lowercase và dashes
- Descriptive names: `wedding-ceremony-01.jpg`
- Avoid spaces: `hero-background.jpg` ✅ not `hero background.jpg` ❌

---

## 🔄 **Cập nhật images trong components**

Khi bạn thêm images mới, cần cập nhật:

1. **Photography.tsx**: Array `photographyData`
2. **Videography.tsx**: Array `videographyData` 
3. **About.tsx**: Placeholder image sources
4. **Hero.tsx**: Background image references

---

## 📝 **Notes**
- Tất cả images trong `/public/images/` có thể access trực tiếp từ `/images/` URL
- Next.js sẽ tự động optimize images khi sử dụng `next/image`
- Recommended upload images với maximum 2MB file size
- Luôn có alt text cho accessibility

---

*4WARM Landing Page - Image Management Guide*
