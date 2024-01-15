const smartPhone = {
    brand: "Apple",
    model: "iPhone 11 pro",
    color: "gold",
    isWaterproof: true,
    storageCapacity: 256,
    has5G: false,
    operatingSystem: "iOS 13",
    features: ["face ID", "wireless charging"],
    apps: ["whatsapp", "instagram", "snapchat", "vipps"],
    ring: function() {
        console.log("ring, ring!");
    },
    camera: {
        cameraResolution: "12MP ULTRA WIDE",
        tripleCamera: true,
        cameraModes: ["Portrait Mode", "4K Video"],
        hasFrontCamera: true
    }
};

module.exports = smartPhone;
