// Dependencies
const awsIot = require("aws-iot-device-sdk");
const SensorReading = require("./models/Reading");
const User =require("./models/User")
const Device =require("./models/Device")

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

const add = async (data) =>  {
    console.log(data)
    try {
        //Create a new sensor reading

        const device = await Device.findOne({ deviceCode: data.deviceCode });
        let user = await User.findOne({ username: device.username });
        let location = data.locations
        if (data.locations == "0.000000,0.0000000"){
            location = "7.254624, 80.591380"
        }
        const reading = new SensorReading({
            userID: user._id,
            deviceCode: data.deviceCode,
            temperature: data.Temperature,
            lightIntensity: data.LDR,
            pH: data.pH,
            locations: location,
        });

        // Save the reading to the database
        const read = reading.save();
        console.log("New reading added  collection")
    } catch (error) {
        console.log("can not add the reading")
    }
}

module.exports = {run};