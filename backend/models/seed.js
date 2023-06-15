const db = require("./")

const detail_packages = [
    {
        name: "Elite Package",
        duration:"1:45min",
        price: "$100 (suv/bigger-110/120)",
        description: "Exterior wash & tire shine & Trim dressinng + interior, Dashboard/Center Console/Cup Holders cleaned, Seat Whipe Down, Deep Vacuum & windows cleaned inside and out."
    }, 
    {
        name: "Elite Exterior",
        duration: "1hr",
        price: "$80 (suv/bigger-90/100)",
        description: " Wash, tire shine, Trim Dressing + Wax, This is a great way to have your car shine and have your plastic trim restored for a better exterior presentation. "
    },
    {
        name: "Premium Exterior",
        duration: "1:30min",
        price: "120 (suv/bigger-130/145)",
        description: "Wash, tire shine, Trim Dressing + Wax + Clay Bar Treatment, By adding the claybar treatment to your cleaning it will take away all debis from the clear coat and "
    },
    {
        name: "Ceramic Wash Wax",
        duration: "1:45min",
        price: "$200 (suv/bigger-210/235)",
        description: "This is a package for clients to have their car coated with a temperary ceramic wax that offers 6months of protection to their car. The process boasts a hand wash, claybar treatment and then the ceramic wax application."
    },
    {
        name: "Photoshoot Package", 
        duration: "3hrs",
        price: "$200 (suv-210)(familysize-230)",
        description: "Exterior Wash & Detail + Seats Shampoo & Conditioning + Vents Steamed + Floor Mats Shampoo, dashboard conditioned"
    },
    {
        name: "Navy Seal Package (cloth seats only)",
        duration: "3hrs",
        price: "$220 (suv-230)(familysize-250)",
        description: "Exterior Wash & Detail + Seats Shampoo & Conditioning + Vents Steamed + Floor Mats Shampoo, dashboard conditioned"
    },
    {
        name: "ShowRoom Package",
        duration: "6hrs+",
        price: "$350 (suv-370)(familysize-400)",
        description: "Exterior Wash & Machine Polish + Seats/Carpet Shampoo & Conditioning & Extraction + Complete Steam Cleaning + Floor Mats Shampoo, All surfaces polished and protected"
    },


]

const detail_services = [
    {
        image: "https://i.imgur.com/g5spb7n.jpg",
        name: "Exterior",
        description: "Exterior detailing includes cleaninng, waxing, claybar treatments, polishing, paint correction, ceramic waxes, ceramic coatings, wheel/rim care, headlight restoration, trim care and other various exterior items"
    },
    {
        image: "https://i.imgur.com/D80BNkG.jpg",
        name: "Interior", 
        description: "Interior involves shampoo & conditioning of carpets and upholstery & mats aswell. It includes cleaning all surfaces including dashboard, cupholder, doorpanels, door jams and also protecting them from UV damage and using polishers to make interior cleanings last longer. Steam cleaning techniques are also utilized to give the cabin that fresh feel and smell from all bacterias and unsanitery odors and dirt."
    }, 
    {
        image: "https://i.imgur.com/ZLzju10.jpg",
        name: "Complete Details",
        description : "Full details inlvolves a thorough cleaning and polishing of all parts of a car pertaining to the exterior and interior."
    },
    {
        image: "https://i.imgur.com/mBth9va.jpg",
        name: "Paint Corrections",
        description: "A process of fixing damage to the cars clear coat by way of scratching and being exposed to elements. Paint correction fixes damages with polishing and sanding to bring back factory finish."
    }, 
    {
        image: "https://i.imgur.com/7lZPdm9.jpg",
        name: "Ceramic Coating",
        description: "A way to protect your cars paint using sheilding technology to add a layer of protection that lasts years. Perfect way to protect your investment and keeps cars value high as depreciation steps in."
    }
]



 
    db.Services.create(detail_services).then((services) => {
            if (services){
                console.log("created", services.length, "services")
            }
    }).catch((err)=>{
        if(err){
            console.log(err)
        }
    })

   
        db.Packages.create(detail_packages).then((packages) => {
                if (packages){
                    console.log("created", packages.length, "packages")
                }
        }).catch((err)=>{
            if(err){
                console.log(err)
            }
        }) 