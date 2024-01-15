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
  ring: function () {
    console.log("ring, ring!");
  },
  camera: {
    cameraResolution: "12MP ULTRA WIDE",
    tripleCamera: true,
    cameraModes: ["Portrait Mode", "4K Video"],
    hasFrontCamera: true,
  },
};

document.getElementById("brand").textContent = smartPhone.brand;
document.getElementById("model").textContent = smartPhone.model;
document.getElementById("color").textContent = smartPhone.color;
document.getElementById("waterproof").textContent = smartPhone.isWaterproof
  ? "Yes"
  : "No";
document.getElementById("storage").textContent = smartPhone.storageCapacity;
document.getElementById("has5G").textContent = smartPhone.has5G ? "Yes" : "No";
document.getElementById("os").textContent = smartPhone.operatingSystem;

const featuresList = document.getElementById("features");
smartPhone.features.forEach((feature) => {
  const listItem = document.createElement("li");
  listItem.textContent = feature;
  featuresList.appendChild(listItem);
});

const appsList = document.getElementById("apps");
smartPhone.apps.forEach((app) => {
  const listItem = document.createElement("li");
  listItem.textContent = app;
  appsList.appendChild(listItem);
});

document.getElementById("camera-resolution").textContent =
  smartPhone.camera.cameraResolution;
document.getElementById("triple-camera").textContent = smartPhone.camera
  .tripleCamera
  ? "Yes"
  : "No";

const cameraModesList = document.getElementById("camera-modes");
smartPhone.camera.cameraModes.forEach((mode) => {
  const listItem = document.createElement("li");
  listItem.textContent = mode;
  cameraModesList.appendChild(listItem);
});

document.getElementById("front-camera").textContent = smartPhone.camera
  .hasFrontCamera
  ? "Yes"
  : "No";
