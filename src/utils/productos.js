const productos = [
    //termos
    {
        id: 1,
        imageProduct: {
            firtsImage: "https://acdn.mitiendanube.com/stores/001/176/785/products/4504972b-7c2a-4841-b137-499c2c8e6e53-df8a28d00348f43f4116935292085677-640-0.jpg",
            secondImage: "https://acdn.mitiendanube.com/stores/001/176/785/products/4504972b-7c2a-4841-b137-499c2c8e6e53-df8a28d00348f43f4116935292085677-640-0.jpg"
        },
        alt: "Termo stanley clasico verde",
        title: "Termo Stanley Classic (Verde)",
        type: "Termos",
        description: "Un termo Stanley verde clásico de 950 ml con manija es un recipiente aislado térmicamente en color verde que tiene una capacidad de 950 mililitros y una cómoda asa para facilitar su transporte.",
        stock: 10,
        price: 65000,
    },
    {
        id: 2,
        imageProduct: {
            firtsImage: "https://acdn.mitiendanube.com/stores/001/176/785/products/2cd70ad9-fb54-4d72-b629-14343cea9eda-d085599ad343bc376416935294142570-640-0.jpg",
            secondImage: "https://acdn.mitiendanube.com/stores/001/176/785/products/2cd70ad9-fb54-4d72-b629-14343cea9eda-d085599ad343bc376416935294142570-640-0.jpg"
        },
        alt: "Termo stanley adventure",
        title: "Termo Stanley adventure (verde)",
        type: "Termos",
        description: "El Termo Stanley Adventure (verde) 1L edición limitada es un termo de alta calidad con capacidad para 1 litro, diseñado para mantener las bebidas calientes o frías durante horas. Esta versión limitada se destaca por su llamativo color verde y la durabilidad característica de la marca Stanley. Perfecto para aventuras al aire libre.",
        stock: 10,
        price: 50000,
    },
    {
        id: 3,
        imageProduct: {
            firtsImage: "https://acdn.mitiendanube.com/stores/001/182/576/products/photoroom-20220803_182505-35598d16b65169b4cb16595620487927-1024-1024.png",
            secondImage: "https://acdn.mitiendanube.com/stores/001/182/576/products/photoroom-20220803_182505-35598d16b65169b4cb16595620487927-1024-1024.png"
        },
        alt: "Termo stanley personalizado",
        title: "Termo Stanley perzonalizado",
        type: "Termos",
        description: "El Termo Stanley personalizado es un termo de acero inoxidable con la opción de añadir tu propio diseño o nombre, convirtiéndolo en un regalo único y personalizado. Ideal para mantener tus bebidas calientes o frías mientras disfrutas de la funcionalidad y calidad de Stanley.",
        stock: 10,
        price: 70000,
    },
    //mates
    {
        id: 4,
        imageProduct: {
            firtsImage: "https://d2r9epyceweg5n.cloudfront.net/stores/001/147/672/products/mate-stanley-negro-10-09628-002-500x50011-6fa5547f6a1cb8b18b15865457382461-640-0.png",
            secondImage: "https://d2r9epyceweg5n.cloudfront.net/stores/001/147/672/products/mate-stanley-negro-10-09628-002-500x50011-6fa5547f6a1cb8b18b15865457382461-640-0.png"
        },
        alt: "Mate stanley 236ml",
        title: "Mate stanley 236ml",
        type: "Mates",
        description: "El Mate Stanley de 236 ml es un mate de alta calidad, duradero y resistente, ideal para disfrutar de bebidas calientes como el mate o el té. Con la confiabilidad característica de Stanley, este mate es perfecto para llevar tus bebidas favoritas contigo a donde quiera que vayas.",
        stock: 10,
        price: 30000,
    },
    {
        id: 5,
        imageProduct: {
            firtsImage: "https://acdn.mitiendanube.com/stores/805/409/products/mateverde1-fe8c65f6ba0e6f4ee115974464202861-1024-1024.png",
            secondImage: "https://acdn.mitiendanube.com/stores/805/409/products/mateverde1-fe8c65f6ba0e6f4ee115974464202861-1024-1024.png"
        },
        alt: "Mate rosamonte Stanley verde 236ml",
        title: "Mate rosamonte Stanley verde 236ml",
        type: "Mates",
        description: "El mate Rosamonte Stanley verde de 236 ml combina la tradición del mate con la calidad de Stanley. Este mate gourd es una opción atractiva y funcional para disfrutar del mate con estilo.",
        stock: 10,
        price: 46000,
    },
    {
        id: 6,
        imageProduct: {
            firtsImage: "https://trown.com.ar/wp-content/uploads/2022/07/DSC09927-1.jpg",
            secondImage: "https://trown.com.ar/wp-content/uploads/2022/07/DSC09927-1.jpg"
        },
        alt: "Mate Stanley 236 ML Trown",
        title: "Mate Stanley 236 ML Trown",
        type: "Mates",
        description: "El mate Stanley mantiene la temperatura durante toda la cebada. Es práctico e higiénico.",
        stock: 10,
        price: 66000,
    },
    //bombillas
    {
        id: 7,
        imageProduct: {
            firtsImage: "https://electrogamer.com.ar/wp-content/uploads/2023/08/bombilla-stanley.webp",
            secondImage: "https://electrogamer.com.ar/wp-content/uploads/2023/08/bombilla-stanley.webp"
        },
        alt: "Bombilla común stanley",
        title: "Bombilla común stanley",
        type: "Bombillas",
        description: "La bombilla común Stanley es un accesorio de acero inoxidable resistente diseñado para disfrutar de bebidas calientes como el mate o el té de manera cómoda y duradera.",
        stock: 10,
        price: 2500,
    },
    {
        id: 8,
        imageProduct: {
            firtsImage: "https://d2r9epyceweg5n.cloudfront.net/stores/876/868/products/d_nq_np_730447-mla50416547149_062022-o1-521d60016fe7ee366016566905982090-640-0.jpg",
            secondImage: "https://d2r9epyceweg5n.cloudfront.net/stores/876/868/products/d_nq_np_730447-mla50416547149_062022-o1-521d60016fe7ee366016566905982090-640-0.jpg"
        },
        alt: "Bombilla para mate spring stanley",
        title: "Bombilla para mate spring stanley",
        type: "Bombillas",
        description: "La bombilla para mate Spring Stanley es un accesorio diseñado específicamente para disfrutar del mate con facilidad. Presenta un diseño resistente y ergonómico que facilita la bebida sin importar la temporada del año.",
        stock: 10,
        price: 11000,
    },
    {
        id: 9,
        imageProduct: {
            firtsImage: "https://argentina4you.com/cdn/shop/products/stanleyspoon.png?v=1650233560&width=1445",
            secondImage: "https://argentina4you.com/cdn/shop/products/stanleyspoon.png?v=1650233560&width=1445"
        },
        alt: "Bombilla Para Mate Stanley Spoon Original",
        title: "Bombilla Para Mate Stanley Spoon Original",
        type: "Bombillas",
        description: "La bombilla para mate Stanley Spoon Original es un accesorio de alta calidad diseñado para disfrutar del mate de manera cómoda y práctica. Su diseño único incorpora una cuchara en el extremo, lo que facilita la preparación y el consumo del mate, permitiendo añadir hierbas y remover fácilmente.",
        stock: 10,
        price: 11000,
    },


]

export default productos;