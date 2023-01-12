// Dependencies
const awsIot = require("aws-iot-device-sdk");
const SensorReading = require("./models/Reading");

let device;
function run() {
    device = awsIot.device({
        clientId: 'abi',
        host: 'a1sebe49a1oqq2-ats.iot.ap-northeast-1.amazonaws.com',
        port: 8883,
        keyPath: './cert/dc8751c45d04791c9d6b08a5d8756de92aa4abacd19c51a4a103bda2e13a1dc6-private.pem.key',
        certPath: './cert/dc8751c45d04791c9d6b08a5d8756de92aa4abacd19c51a4a103bda2e13a1dc6-certificate.pem.crt',
        caPath: './cert/AmazonRootCA1.pem',
    });

    // when connected to broker, subscribe to topic
    device.on("connect", function () {
        device.subscribe("/device1/", function (err) {
            if (!err) {
                console.log("MQTT Connected");
            }
        });
    });

    // Set handler for the device, it will get the messages from subscribers topics.
    device.on("message", function (topic, payload) {
        const data = JSON.parse(payload.toString());
        if (data) {
            add(data);
        }
    });

    device.on("error", function (topic, payload) {
        console.log("Error:", topic, payload.toString());
    });
}

function add(data) {
    console.log(data)
    // try {
    //     //Create a new sensor reading
    //     const reading = new SensorReading({
    //         deviceCode: data.deviceCode,
    //         temperature: data.temperature,
    //         lightIntensity: data.lightIntensity,
    //         pH: data.pH,
    //         locations: data.locations,
    //     });
    //
    //
    //     // const reading = new SensorReading(data);
    //     // Save the reading to the database
    //     const read = reading.save();
    //     console.log("New reading added to collection")
    // } catch (error) {
    //     console.log("can not add the reading")
    // }
}


function sendData() {
    const obj = { type: "sync" };
    console.log("STEP - Requesting data from AWS  IoT Core");
    device.publish("/device1/", JSON.stringify(obj));
}

module.exports = { run, sendData };