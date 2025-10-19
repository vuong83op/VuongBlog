# Blog Cá Nhân - Sinh viên CNTT HUTECH

Website blog cá nhân được xây dựng bằng ReactJS, dành cho sinh viên ngành Công nghệ Thông tin tại HUTECH.

## 🚀 Tính năng chính

### 📱 Giao diện người dùng
- **Trang chủ**: Giới thiệu bản thân và hiển thị bài viết mới nhất
- **Trang bài viết**: Hiển thị chi tiết nội dung bài viết với tính năng like, share, comment
- **Trang giới thiệu**: Thông tin cá nhân, kỹ năng, dự án và thành tích
- **Trang liên hệ**: Form liên hệ với thông tin địa chỉ và FAQ
- **Trang danh mục**: Lọc và tìm kiếm bài viết theo chủ đề

### 🎨 Thiết kế
- **Màu sắc HUTECH**: Sử dụng màu xanh dương chủ đạo (#007bff)
- **Responsive**: Tối ưu cho mọi thiết bị (desktop, tablet, mobile)
- **Modern UI**: Giao diện hiện đại với hiệu ứng mượt mà
- **Typography**: Font Roboto và Poppins cho trải nghiệm đọc tốt

### ⚡ Tính năng kỹ thuật
- **React Router**: Điều hướng trang đơn giản
- **Component-based**: Kiến trúc component tái sử dụng
- **CSS Variables**: Quản lý màu sắc và theme dễ dàng
- **Responsive Grid**: Layout linh hoạt cho mọi màn hình
- **Search & Filter**: Tìm kiếm và lọc bài viết
- **Scroll to Top**: Nút cuộn lên đầu trang

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 18, React Router DOM
- **Styling**: CSS3 với CSS Variables
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📦 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- npm >= 8.0.0

### Cài đặt
```bash
# Clone repository
git clone <repository-url>
cd personal-blog-hutech

# Cài đặt dependencies
npm install

# Chạy dự án
npm start
```

Dự án sẽ chạy tại `http://localhost:3000`

### Build cho production
```bash
npm run build
```

## 📁 Cấu trúc dự án

```
src/
├── components/          # Các component tái sử dụng
│   ├── Header.js       # Header với navigation
│   ├── Footer.js       # Footer với thông tin liên hệ
│   └── ScrollToTop.js  # Nút cuộn lên đầu trang
├── pages/              # Các trang chính
│   ├── Home.js         # Trang chủ
│   ├── About.js        # Trang giới thiệu
│   ├── Contact.js      # Trang liên hệ
│   ├── BlogPost.js     # Trang chi tiết bài viết
│   └── Category.js     # Trang danh mục
├── data/               # Dữ liệu mẫu
│   └── blogData.js     # Dữ liệu blog và bài viết
├── App.js              # Component chính
├── App.css             # Styles chung
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎯 Các trang chính

### 1. Trang chủ (Home)
- Hero section với giới thiệu bản thân
- Bài viết nổi bật (featured posts)
- Bài viết mới nhất
- Sidebar với danh mục và thống kê

### 2. Trang bài viết (Blog Post)
- Hiển thị nội dung chi tiết
- Thông tin tác giả
- Tính năng like, share, comment
- Bài viết liên quan
- Tags và danh mục

### 3. Trang giới thiệu (About)
- Thông tin cá nhân
- Học vấn và liên hệ
- Kỹ năng lập trình với progress bar
- Dự án tiêu biểu
- Thành tích và chứng chỉ
- Mục tiêu tương lai

### 4. Trang liên hệ (Contact)
- Form liên hệ với validation
- Thông tin liên hệ chi tiết
- Bản đồ vị trí trường HUTECH
- FAQ (Câu hỏi thường gặp)

### 5. Trang danh mục (Category)
- Lọc bài viết theo chủ đề
- Tìm kiếm trong danh mục
- Sắp xếp theo nhiều tiêu chí
- Danh mục liên quan

## 🎨 Tùy chỉnh

### Màu sắc
Chỉnh sửa CSS Variables trong `src/index.css`:

```css
:root {
  --primary-color: #007bff;    /* Màu chính */
  --primary-dark: #0056b3;     /* Màu chính đậm */
  --secondary-color: #6c757d;   /* Màu phụ */
  /* ... */
}
```

### Dữ liệu blog
Chỉnh sửa file `src/data/blogData.js` để thêm/sửa:
- Bài viết mới
- Danh mục
- Thông tin tác giả

### Thông tin cá nhân
Cập nhật thông tin trong:
- `src/pages/About.js` - Thông tin giới thiệu
- `src/pages/Contact.js` - Thông tin liên hệ
- `src/components/Footer.js` - Thông tin footer

## 📱 Responsive Design

Website được tối ưu cho:
- **Desktop**: >= 1200px
- **Laptop**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile**: < 768px

## 🚀 Triển khai

### Netlify
1. Build dự án: `npm run build`
2. Upload thư mục `build/` lên Netlify
3. Cấu hình redirect cho SPA

### Vercel
1. Kết nối GitHub repository
2. Vercel sẽ tự động deploy
3. Cấu hình build command: `npm run build`

### GitHub Pages
1. Cài đặt gh-pages: `npm install --save-dev gh-pages`
2. Thêm script vào package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## 🔧 Phát triển thêm

### Thêm tính năng
- **Dark Mode**: Thêm chế độ tối
- **PWA**: Biến thành Progressive Web App
- **Backend**: Kết nối với API backend
- **Database**: Lưu trữ dữ liệu thực
- **Authentication**: Hệ thống đăng nhập
- **Admin Panel**: Quản lý bài viết

### Tối ưu hiệu suất
- **Lazy Loading**: Tải component khi cần
- **Code Splitting**: Chia nhỏ bundle
- **Image Optimization**: Tối ưu hình ảnh
- **SEO**: Meta tags và sitemap

## 📄 License

Dự án này được phát hành dưới MIT License.

## 👨‍💻 Tác giả

**Nguyễn Văn A** - Sinh viên CNTT HUTECH
- Email: student@hutech.edu.vn
- GitHub: [@username](https://github.com/username)
- LinkedIn: [Profile](https://linkedin.com/in/username)

## 🙏 Cảm ơn

Cảm ơn HUTECH và cộng đồng lập trình đã hỗ trợ trong quá trình học tập và phát triển dự án này.

---

**Lưu ý**: Đây là dự án demo cho mục đích học tập. Để sử dụng trong thực tế, cần thêm backend và database.
