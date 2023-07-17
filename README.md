# projev1

# Express App

This project contains a web application created using the Express framework. The application responds to requests coming to specific URL routes and performs relevant database queries. It also generates dynamic content using the EJS (Embedded JavaScript) template engine.

## Getting Started

To run the project locally, follow these steps:

1. Copy the project files to a local directory.
2. Open the terminal and navigate to the project folder.
3. Run the following command to install the required packages:
   ```
   npm install
   ```
4. Edit the `data/db.js` file to configure the database connection.
5. Start the application by running the following command:
   ```
   npm start
   ```
6. Open your web browser and visit `http://localhost:3000` to view the application.

## Technologies Used

- Express: Web application framework
- Axios: Library for making HTTP requests
- EJS: JavaScript library used as a template engine
- MySQL: Relational database management system

## Project Structure

- `public` directory: Contains static files (CSS, JavaScript, images, etc.).
- `node_modules` directory: Contains project dependencies.
- `data/db.js` file: Configuration file for the database connection and queries.
- `views` directory: Contains EJS templates.
- `index.js` file: Main application file. Express application is created here, and routes are defined.

## Available URL Routes

- `/coin/:id`: Route that retrieves information for a specific coin.
- `/coin`: Route that retrieves a list of all coins.
- `/indikator_kilavuz`: Route that retrieves a list of indikator kilavuz.
- `/indikator`: Route that retrieves a list of indikators.
- `/grafik`: Route that retrieves a list of graphics.
- `/`: Homepage route, fetches coins from the `coinler` table where `isHome` field is 1.

## License

This project is licensed under the MIT License. For more information, please see the `LICENSE` file.

---




---------TÜRKÇE----------

Bu proje, Express framework'ü kullanılarak oluşturulmuş bir web uygulamasını içermektedir. Uygulama, belirli URL rotalarına gelen isteklere yanıt verir ve ilgili veritabanı sorgularını gerçekleştirir. Ayrıca, EJS (Embedded JavaScript) şablon motorunu kullanarak dinamik içerik oluşturur.

## Başlarken

Projenin yerel bir ortamda çalıştırılabilmesi için aşağıdaki adımları izleyin:

1. Proje dosyalarını yerel bir klasöre kopyalayın.
2. Terminali açın ve proje klasörüne gidin.
3. Gerekli paketleri yüklemek için aşağıdaki komutu çalıştırın:
   ```
   npm install
   ```
4. Veritabanı bağlantısı için `data/db.js` dosyasını düzenleyin ve gerekli yapılandırmaları yapın.
5. Uygulamayı başlatmak için aşağıdaki komutu çalıştırın:
   ```
   npm start
   ```
6. Web tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görüntüleyebilirsiniz.

## Kullanılan Teknolojiler

- Express: Web uygulama framework'ü
- Axios: HTTP istekleri için kullanılan bir kütüphane
- EJS: Şablon motoru olarak kullanılan bir JavaScript kütüphanesi
- MySQL: Veritabanı yönetim sistemi

## Proje Yapısı

- `public` klasörü: Statik dosyaları (CSS, JavaScript, resimler vb.) içerir.
- `node_modules` klasörü: Bağımlılıkların bulunduğu klasördür.
- `data/db.js` dosyası: Veritabanı bağlantısı ve sorguları için yapılandırmaların yapıldığı dosya.
- `views` klasörü: EJS şablonlarını içeren klasördür.
- `index.js` dosyası: Ana uygulama dosyasıdır. Express uygulaması burada oluşturulur ve rotalar tanımlanır.

## Kullanılabilir URL Rotaları

- `/coin/:id`: Belirli bir coinin bilgilerini getiren bir rotadır.
- `/coin`: Tüm coinlerin listesini getiren bir rotadır.
- `/indikator_kilavuz`: Indikatör kilavuzunun listesini getiren bir rotadır.
- `/indikator`: Indikatörlerin listesini getiren bir rotadır.
- `/grafik`: Grafiklerin listesini getiren bir rotadır.
- `/`: Anasayfa rotası, `coinler` tablosunda `isHome` alanı 1 olan coinleri getirir.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylı bilgi için `LICENSE` dosyasını inceleyebilirsiniz.

---


