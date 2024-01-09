import Product from "../models/product";
import ProductItem from "../models/product-item";

const products = [
    new Product({
        id: 0,
        productName: 'synvisc',
        productLogo: '/synvisc.jpg',
        description: [
            `Synvisc is a viscosupplement injection for the treatment of pain caused by 
                osteoarthritis (OA) of the knee. Synvisc supplements the fluid in the knee 
                to help lubricate and cushion the joint as a temporary replacement and supplement for 
                synovial fluid.`
        ],
        itemList: [
            new ProductItem({
                id: 0,
                productName: 'SYNVISC 2 ML',
                productId: 'A0001',
                thumbUrl: '/synvisc1.jpg',
                quantity: 'Syringes 3',
                volume: '2,0 ml',
                description: `Synvisc is a treatment to relieve discomfort and pain while allowing a greater flecibility. 
                    Synovisc is a temporary replacement and supplement for synovial fluid. 
                    Synvisc is perfect for patients who have not responded adequately to conservative non-pharmacologic 
                    therapy and simple analgesics.`
            }),
            new ProductItem({
                id: 1,
                productName: 'SYNVISC ONE 6 ML',
                productId: 'A0048',
                thumbUrl: '/synvisc-one.jpg',
                quantity: 'Syringes 1',
                volume: '6,0 ml',
                description: `Aquashine Soft Filler is a skin rejuvenating and anti-pigmentation filler 
                    that reduce wrinkles, improve skin elasticity by generating new skin cells and 
                    revitalize tired and dull skin by maximizing cell proliferation and reducing 
                    skin problem. Contains pure hyaluronic acid that moisturizes the skin and tightens pores. 
                    This product comes with 2 syringes.`
            }),
        ]
    }),
    new Product({
        id: 0,
        productName: 'aquashine',
        productLogo: '/aquashine.jpg',
        description: [
            `The Aquashine range has both biphasic and monophasic physical characteristics 
                introduced by a combination of cutting edged biomimetic peptide technology and crossed 
                linked HA which bring upgraded quality in gel viscosity and elasticity with softer operation.`,

            `Aquashine contains higher concentration of free hyaluronic acid, linked with peptides and 
                cross-linked HA molecules, which results in increased stability of HA gel that is a safe material 
                with natural compounds.`,
            
            `Aquashine makes up-regulation of endogenous collagen and hyaluronic acid to increase skin tightness 
                and lifting. In overall, biomimetic peptide technology has endowed higher viscosity and elasticity, 
                increased efficacy of sculpturing with longer lasting, increased gel stability and softer injection 
                of hyaluronic acid gel.`
        ],
        itemList: [
            new ProductItem({
                id: 0,
                productName: 'AQUASHINE PTX',
                productId: 'A0997',
                thumbUrl: '/aquashine-ptx.jpg',
                quantity: 'Syringes 2',
                volume: '2,0 ml',
                description: `Aquashine PTX is a soft mesotherapy filler that contains biomimetic 
                    peptides and hyaluronic acids. The product stimulates the regeneration of aging 
                    skin and prevents free radicals from further development slowing the aging process 
                    in the skin. Aquashine PTX has also shown a positive effect on lightning treatments 
                    of freckles and coupe rose. The product is perfect for the treatment of fine lines 
                    in the face, perioral wrinkles, and nasolabial folds. The result will appear over 
                    a period of 2-3 weeks where the skin will appear firmer. The results can last up 
                    to 9-12 months. This product comes with 2 syringes.`
            }),
            new ProductItem({
                id: 1,
                productName: 'AQUASHINE SOFT FILLER',
                productId: 'A0998',
                thumbUrl: '/aquashine-soft-filler.jpg',
                quantity: 'Syringes 2',
                volume: '2,0 ml',
                description: `Aquashine Soft Filler is a skin rejuvenating and anti-pigmentation filler 
                    that reduce wrinkles, improve skin elasticity by generating new skin cells and 
                    revitalize tired and dull skin by maximizing cell proliferation and reducing 
                    skin problem. Contains pure hyaluronic acid that moisturizes the skin and tightens pores. 
                    This product comes with 2 syringes.`
            }),
            new ProductItem({
                id: 2,
                productName: 'AQUASHINE PTX',
                productId: 'A0999',
                thumbUrl: '/aquashine-soft-filler-br.jpg',
                quantity: 'Syringes 2',
                volume: '2,0 ml',
                description: `Aquashine Soft Filler BR is a skin rejuvenating and anti-pigmentation filler 
                    that reduce wrinkles, improve skin elasticity by generating new skin cells and reduce 
                    and prevent hyper-pigmentation, down-regulates melanin synthesis, thereby reducing skin 
                    pigmentation, aged spots and freckles. Contains pure hyaluronic acid that moisturizes 
                    the skin and tightens pores. This product comes with 2 syringes.`
            }),
        ]
    })
]

export default products;