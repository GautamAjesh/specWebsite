

const allProducts = [
    {
        id: 1,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of Product 1.',
        images:'https://www.quayaustralia.co.uk/cdn/shop/products/Quay_HighKeyMini_BlackFadePol_Front_RGB.jpg?v=1686082577',
    },
    {
        id: 2,
        name: 'KIDS GLASSES',
        price: 2500,
        description: 'This is the description of KIDS GLASSES.',
        images:'https://eyewearinsight.com/images/product/longlarge_VPK-1029-Pink-2617-img1.jpg',
    },
    {
        id: 3,
        name: 'EYEGLASSES',
        price: 3500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 4,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of Product 4.',
        images:'https://www.quayaustralia.co.uk/cdn/shop/products/Quay_HighKeyMini_BlackFadePol_Front_RGB.jpg?v=1686082577',
    },
    {
        id: 5,
        name: 'SUNGLASSES',
        price: 2500,
        description: 'This is the description of SUNGLASSES.',
        images:'https://www.quayaustralia.co.uk/cdn/shop/products/Quay_HighKeyMini_BlackFadePol_Front_RGB.jpg?v=1686082577',
    },
    {
        id: 6,
        name: 'KIDS GLASSES',
        price: 1200,
        description: 'This is the description of KIDS GLASSES.',
        images:'https://eyewearinsight.com/images/product/longlarge_VPK-1029-Pink-2617-img1.jpg',
    },
    {
        id: 7,
        name: 'COMPUTER GLASSES',
        price: 1700,
        description: 'This is the description of Product 7.',
        images:'https://www.quayaustralia.co.uk/cdn/shop/products/Quay_HighKeyMini_BlackFadePol_Front_RGB.jpg?v=1686082577',
    },
    {
        id: 8,
        name: 'SUNGLASSES',
        price: 1500,
        description: 'This is the description of SUNGLASSES.',
        images:'https://www.quayaustralia.co.uk/cdn/shop/products/Quay_HighKeyMini_BlackFadePol_Front_RGB.jpg?v=1686082577',
    },
    {
        id: 9,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 10,
        name: 'KIDS GLASSES',
        price: 1500,
        description: 'This is the description of KIDS GLASSES.',
        images:'https://eyewearinsight.com/images/product/longlarge_VPK-1029-Pink-2617-img1.jpg',
    },
    {
        id: 11,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 12,
        name: 'COMPUTER GLASSES',
        price: 2500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 13,
        name: 'SUNGLASSES',
        price: 3500,
        description: 'This is the description of SUNGLASSES.',
        images:'https://www.quayaustralia.co.uk/cdn/shop/products/Quay_HighKeyMini_BlackFadePol_Front_RGB.jpg?v=1686082577',
    },
    {
        id: 14,
        name: 'KIDS GLASSES',
        price: 1500,
        description: 'This is the description of KIDS GLASSES.',
        images:'https://eyewearinsight.com/images/product/longlarge_VPK-1029-Pink-2617-img1.jpg',
    },
    {
        id: 15,
        name: 'EYEGLASSES',
        price: 2500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 16,
        name: 'COMPUTER GLASSES',
        price: 1200,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 17,
        name: 'SUNGLASSES',
        price: 1700,
        description: 'This is the description of SUNGLASSES.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 18,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of Product 18.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6zoZNbLNr2pK2xLd2OXmSoN_23fwJtRZ8mEP95QKLZWZ_K5M0DpX_Ylguop5b8YKZLw&usqp=CAU',
    },
    {
        id: 19,
        name: 'SUNGLASSES',
        price: 1500,
        description: 'This is the description of SUNGLASSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6zoZNbLNr2pK2xLd2OXmSoN_23fwJtRZ8mEP95QKLZWZ_K5M0DpX_Ylguop5b8YKZLw&usqp=CAU',
    },
    {
        id: 20,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 21,
        name: 'KIDS GLASSES1',
        price: 1500,
        description: 'This is the description of KIDS GLASSES1.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRFWhwhXv08UrLmKURE118xflUdEiI7Mzu-b-SuUtUhVfQw6JJ8x1K01Yq3Ub1b6yZU0&usqp=CAU',
    },
    {
        id: 22,
        name: 'EYEGLASSES',
        price: 2500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 23,
        name: 'COMPUTER GLASSES',
        price: 3500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 24,
        name: 'KIDS GLASSES',
        price: 1500,
        description: 'This is the description of KIDS GLASSES.',
        images:'https://eyewearinsight.com/images/product/longlarge_VPK-1029-Pink-2617-img1.jpg',
    },
    {
        id: 25,
        name: 'EYEGLASSES',
        price: 2500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 26,
        name: 'COMPUTER GLASSES',
        price: 1200,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 27,
        name: 'KIDS GLASSES',
        price: 1700,
        description: 'This is the description of KIDS GLASSES.',
        images:'https://eyewearinsight.com/images/product/longlarge_VPK-1029-Pink-2617-img1.jpg',
    },
    {
        id: 28,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 29,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 30,
        name: 'EYEGLASSES0',
        price: 1500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 31,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 32,
        name: 'EYEGLASSES',
        price: 2500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 33,
        name: 'EYEGLASSES3',
        price: 3500,
        description: 'This is the description of EYEGLASSES3.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 34,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 35,
        name: 'EYEGLASSES',
        price: 2500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 36,
        name: 'EYEGLASSES6',
        price: 1200,
        description: 'This is the description of EYEGLASSES6.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6zoZNbLNr2pK2xLd2OXmSoN_23fwJtRZ8mEP95QKLZWZ_K5M0DpX_Ylguop5b8YKZLw&usqp=CAU',
    },
    {
        id: 37,
        name: 'EYEGLASSES7',
        price: 1700,
        description: 'This is the description of EYEGLASSES7.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6zoZNbLNr2pK2xLd2OXmSoN_23fwJtRZ8mEP95QKLZWZ_K5M0DpX_Ylguop5b8YKZLw&usqp=CAU',
    },
    {
        id: 38,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 39,
        name: 'EYEGLASSES9',
        price: 1500,
        description: 'This is the description of EYEGLASSES9.',
        images:"https://www.soigne.co.in/product-images/DSC04393.1.jpg/583024000001349176/800x800",
    },
    {
        id: 40,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 41,
        name: 'KIDS GLASSES',
        price: 1500,
        description: 'This is the description of KIDS GLASSES.',
        images:'https://eyewearinsight.com/images/product/longlarge_VPK-1029-Pink-2617-img1.jpg',
    },
    {
        id: 42,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 43,
        name: 'SUNGLASSES',
        price: 1500,
        description: 'This is the description of SUNGLASSES.',
        images:"https://www.soigne.co.in/product-images/DSC04393.1.jpg/583024000001349176/800x800",
    },
    {
        id: 44,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 45,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 46,
        name: 'CONTACT LENSES',
        price: 1500,
        description: 'This is the description of CONTACT LENSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRFWhwhXv08UrLmKURE118xflUdEiI7Mzu-b-SuUtUhVfQw6JJ8x1K01Yq3Ub1b6yZU0&usqp=CAU',
    },
    {
        id: 47,
        name: 'SUNGLASSES',
        price: 1500,
        description: 'This is the description of SUNGLASSES.',
        images:"https://www.soigne.co.in/product-images/DSC04393.1.jpg/583024000001349176/800x800",
    },
    {
        id: 48,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 49,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 50,
        name: 'SUNGLASSES0',
        price: 1500,
        description: 'This is the description of SUNGLASSES0.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 51,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 52,
        name: 'COMPUTER GLASSES',
        price: 2500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 53,
        name: 'SUNGLASSES3',
        price: 3500,
        description: 'This is the description of SUNGLASSES3.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 54,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of SUNGLASSES4.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRFWhwhXv08UrLmKURE118xflUdEiI7Mzu-b-SuUtUhVfQw6JJ8x1K01Yq3Ub1b6yZU0&usqp=CAU',
    },
    {
        id: 55,
        name: 'COMPUTER GLASSES',
        price: 2500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 56,
        name: 'EYEGLASSES',
        price: 1200,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 57,
        name: 'SUNGLASSES7',
        price: 1700,
        description: 'This is the description of SUNGLASSES7.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 58,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 59,
        name: 'KIDS GLASSES',
        price: 1500,
        description: 'This is the description of KIDS GLASSES.',
        images:'https://eyewearinsight.com/images/product/longlarge_VPK-1029-Pink-2617-img1.jpg',
    },
    {
        id: 60,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 61,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 62,
        name: 'KIDS GLASSES2',
        price: 1500,
        description: 'This is the description of KIDS GLASSES2.',
        images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBkydEij33rc1U0wknGLFWNx-003Zyd5NxMxrVY_Gc_FfF_DFKzzF66xIgnzcW1-m3CE&usqp=CAU",
    },
    {
        id: 63,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 64,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 65,
        name: 'KIDS GLASSES5',
        price: 1500,
        description: 'This is the description of KIDS GLASSES5.',
        images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBkydEij33rc1U0wknGLFWNx-003Zyd5NxMxrVY_Gc_FfF_DFKzzF66xIgnzcW1-m3CE&usqp=CAU",
    },
    {
        id: 66,
        name: 'EYEGLASSES',
        price: 1500,
        description: 'This is the description of EYEGLASSES.',
        images:'https://images-static.nykaa.com/media/catalog/product/n/y/ny_106.jpg?tr=w-500,pr-true'
    },
    {
        id: 67,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 68,
        name: 'KIDS GLASSES8',
        price: 1500,
        description: 'This is the description of KIDS GLASSES8.',
        images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBkydEij33rc1U0wknGLFWNx-003Zyd5NxMxrVY_Gc_FfF_DFKzzF66xIgnzcW1-m3CE&usqp=CAU"
    },
    {
        id: 69,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 70,
        name: 'CONTACT LENSES',
        price: 1500,
        description: 'This is the description of CONTACT LENSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6zoZNbLNr2pK2xLd2OXmSoN_23fwJtRZ8mEP95QKLZWZ_K5M0DpX_Ylguop5b8YKZLw&usqp=CAU',
    },
    {
        id: 71,
        name: 'SUNGLASSES',
        price: 1500,
        description: 'This is the description of SUNGLASSES.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 72,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 73,
        name: 'SUNGLASSES',
        price: 1500,
        description: 'This is the description of SUNGLASSES.',
        images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBkydEij33rc1U0wknGLFWNx-003Zyd5NxMxrVY_Gc_FfF_DFKzzF66xIgnzcW1-m3CE&usqp=CAU",
    },
    {
        id: 74,
        name: 'CONTACT LENSES',
        price: 1500,
        description: 'This is the description of CONTACT LENSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6zoZNbLNr2pK2xLd2OXmSoN_23fwJtRZ8mEP95QKLZWZ_K5M0DpX_Ylguop5b8YKZLw&usqp=CAU',
    },
    {
        id: 75,
        name: 'CONTACT LENSES',
        price: 1500,
        description: 'This is the description of CONTACT LENSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRFWhwhXv08UrLmKURE118xflUdEiI7Mzu-b-SuUtUhVfQw6JJ8x1K01Yq3Ub1b6yZU0&usqp=CAU',
    },
    {
        id: 76,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 77,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 78,
        name: 'CONTACT LENSES',
        price: 1500,
        description: 'This is the description of CONTACT LENSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6zoZNbLNr2pK2xLd2OXmSoN_23fwJtRZ8mEP95QKLZWZ_K5M0DpX_Ylguop5b8YKZLw&usqp=CAU',
    },
    {
        id: 79,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 80,
        name: 'SUNGLASSES0',
        price: 1500,
        description: 'This is the description of SUNGLASSES0.',
        images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBkydEij33rc1U0wknGLFWNx-003Zyd5NxMxrVY_Gc_FfF_DFKzzF66xIgnzcW1-m3CE&usqp=CAU",
    },
    {
        id: 81,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 82,
        name: 'COMPUTER GLASSES',
        price: 2500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 83,
        name: 'CONTACT LENSES',
        price: 3500,
        description: 'This is the description of CONTACT LENSES.',
       images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRFWhwhXv08UrLmKURE118xflUdEiI7Mzu-b-SuUtUhVfQw6JJ8x1K01Yq3Ub1b6yZU0&usqp=CAU',  
    },
    {
        id: 84,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 85,
        name: 'COMPUTER GLASSES',
        price: 2500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 86,
        name: 'SUNGLASSES6',
        price: 1200,
        description: 'This is the description of SUNGLASSES6.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 87,
        name: 'COMPUTER GLASSES',
        price: 1700,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 88,
        name: 'CONTACT LENSES',
        price: 1500,
        description: 'This is the description of CONTACT LENSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6zoZNbLNr2pK2xLd2OXmSoN_23fwJtRZ8mEP95QKLZWZ_K5M0DpX_Ylguop5b8YKZLw&usqp=CAU',
    },
    {
        id: 89,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 90,
        name: 'CONTACT LENSES',
        price: 1500,
        description: 'This is the description of CONTACT LENSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRFWhwhXv08UrLmKURE118xflUdEiI7Mzu-b-SuUtUhVfQw6JJ8x1K01Yq3Ub1b6yZU0&usqp=CAU',
    },
    {
        id: 91,
        name: 'COMPUTER GLASSES1',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES1.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 92,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 93,
        name: 'COMPUTER GLASSES3',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES3.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 94,
        name: 'CONTACT LENSES',
        price: 1500,
        description: 'This is the description of CONTACT LENSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6zoZNbLNr2pK2xLd2OXmSoN_23fwJtRZ8mEP95QKLZWZ_K5M0DpX_Ylguop5b8YKZLw&usqp=CAU',
    },
    {
        id: 95,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 96,
        name: 'COMPUTER GLASSES6',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES6.',
        images:'https://m.media-amazon.com/images/I/51vOfkGyuqL._AC_SL1500_.jpg',
    },
    {
        id: 97,
        name: 'CONTACT LENSES',
        price: 1500,
        description: 'This is the description of CONTACT LENSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRFWhwhXv08UrLmKURE118xflUdEiI7Mzu-b-SuUtUhVfQw6JJ8x1K01Yq3Ub1b6yZU0&usqp=CAU',
    },
    {
        id: 98,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },
    {
        id: 99,
        name: 'CONTACT LENSES',
        price: 1500,
        description: 'This is the description of CONTACT LENSES.',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6zoZNbLNr2pK2xLd2OXmSoN_23fwJtRZ8mEP95QKLZWZ_K5M0DpX_Ylguop5b8YKZLw&usqp=CAU',
    },
    {
        id: 100,
        name: 'COMPUTER GLASSES',
        price: 1500,
        description: 'This is the description of COMPUTER GLASSES.',
        images:"https://media.istockphoto.com/id/160136810/photo/eyeglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NBiS2jW0MsOIzviDdikgXWHNRcBHw1fwVjIWkYJ6CpU=",
    },

]

export default allProducts;