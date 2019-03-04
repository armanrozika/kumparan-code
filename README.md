This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Project ini dapat dilihat secara di https://armanrozika.github.io/kumparan-build/

Dalam project ini saya menggunakan CRA-create react app, dan menggunakan redux sebagai state management, bersama dengan redux-thunk untuk melakukan panggilan asynchronous di dalam redux.

Dalam project ini, saya masih belum bisa menambahkan fungsi delete dan edit pada comments dan posts, disebabkan karena saya belum menemukan cara melakukan delete dan patch pada API jsonplaceholder. Jsonplaceholder sendiri menyediakan method delete dan patch, akan tetapi data tidak benar-benar masuk ke server. Namun demukian, saya mampu menambahkan fungsi add. Walaupun API call yang dilakukan tidak benar-benar menuju server, akan tetapi jsonplaceholder memberikan respon yang dapat digunakan untuk mengupdate store pada reducer.

Demikian, semoga project ini dapat menjadi bahan pertimbangan kedepannya, terima kasih
