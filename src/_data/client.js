module.exports = {
    name: "Flannel Landworks",
    owner: "Mark Gaulden",
    email: "mark@flannellandworks.com",
    phoneForTel: "6363453724",
    phoneFormatted: "(636) 345-3724",
    socials: {
        google: "https://share.google/rubBwCP3rOnGXEmMX",
        facebook: "https://www.facebook.com/p/Flannel-Landworks-61582936221785/",
        instagram: "",
        youtube: "",
    },
    slogans: [
        "Professional equipment, professional results",
        "Take back your land",
        "Free peace of mind quotes",
        "Residential acreage specialists",
    ],
    services: [
        "Forestry Mulching",
        "Land Clearing",
        "Brush Clearing",
        "Trail Clearing",
        "Fence Line Clearing",
        "Field Reclamation",
        "Food Plot Prep",
        "CRP Field Compliance",
    ],
    about: "Flannel Landworks was started to serve residential landowners who need reliable help reclaiming their acreage. We specialize in forestry mulching, brush clearing, and turning unusable land into property you can actually use with efficient, high-horsepower equipment.",
    forestryMulchingBenefits: [
        {
            title: "No Burn Piles or Hauling",
            text: "Forestry mulching leaves a dense mulch layer that acts as a natural weed suppressant and returns nutrients to the ground.",
        },
        {
            title: "Minimal Soil Disturbance",
            text: "Roots stay in the ground and mulch stays on top, helping prevent erosion while leaving the property cleaner and more usable.",
        },
        {
            title: "Immediate Results",
            text: "One machine and one operator can do the work of a full crew. Most properties are visible and walkable the same day.",
        },
    ],
    landClearingCopy: {
        headline: "Take Back Your Land",
        text: "Dense brush, honeysuckle, privet, autumn olive, briars, saplings, and select trees up to 8 inches in diameter can be mulched into clean, usable land.",
    },
    quoteCopy: {
        headline: "Peace of Mind Quotes",
        text: "We quote your project upfront, so you know exactly what it will cost before we ever start. No hourly rates, no daily rates, and no surprises.",
        callToAction: "Request a Peace of Mind Quote",
    },
    commonMistakes: [
        {
            title: "Going With the Cheapest Price",
            text: "A low daily rate can cost more if the job takes longer than expected.",
        },
        {
            title: "Not Understanding the Equipment",
            text: "Not all clearing methods are the same. Forestry mulching is clean, efficient, and leaves your property usable right away.",
        },
        {
            title: "Hiring Someone Who Does Not Communicate",
            text: "If a contractor does not call back before the job, they probably will not communicate well during the job either.",
        },
    ],
    communicationCopy: "We focus on clear communication, upfront pricing, and doing the job right the first time.",
    faq: [
        {
            question: "Why do land clearing quotes vary so much once the contractor sees my property?",
            answer: "Brush density, terrain difficulty, access points, and the size of trees being removed all affect the cost. We provide whole-project quotes with no hidden fees.",
        },
        {
            question: "Why do you quote whole projects instead of charging by the day or hour?",
            answer: "Whole-project pricing gives you peace of mind. A half-day or one-day estimate can turn into a larger bill if the work takes longer than expected.",
        },
        {
            question: "What hidden fees should I watch out for after a land clearing job?",
            answer: "At Flannel Landworks, there are no hidden fees, daily rates, hauling fees, or surprise charges. The quote you receive is the price you pay.",
        },
        {
            question: "Are you insured?",
            answer: "Yes. We are fully licensed and insured to operate, and documentation is available upon request. Our drivers also hold Class A CDL licenses.",
        },
        {
            question: "How long will my project take?",
            answer: "Timing depends on the density, size, and scope of the project. With high-horsepower, high-flow equipment, we can clear roughly 1 to 5 acres of brush per day.",
        },
        {
            question: "Will your equipment damage my property?",
            answer: "Our forestry mulcher is designed for minimal ground disturbance. We use rubber tracks designed for yards, distribute weight evenly, and avoid operating when ground conditions are too wet.",
        },
        {
            question: "How do I make sure I am not clearing over a property line into a neighbor's yard?",
            answer: "Mark your property boundaries clearly before we arrive. We work within marked boundaries to avoid property line issues.",
        },
    ],
    quoteFields: [
        "First Name and Last Name",
        "Email address",
        "Phone number",
        "Address",
        "Brief description of the project",
    ],
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://flannel-landworks.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
