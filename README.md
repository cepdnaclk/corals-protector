___
# Corals Protector
___

Sri Lanka is an island. We have many sea resources. One of the main resources is
coral reefs. For centuries, coral reefs have been a valuable resource for the people of Sri
Lanka. Coral reefs are among the most biologically valuable ecosystems on the globe. Coral
reefs rank among the most biologically productive and diverse of all-natural ecosystems. A
single reef can be home to 3,000 different species, while one-third of the world’s fish species
depend on them. They calm the energy of the waves, providing vital protection to the shores.
They are also a source of food and new medicines. Millions of people depend on reefs for
food, income, and protection. Fishing, diving, and snorkeling on and near reefs add millions
of rupees to local businesses.

However, we do not care about corals. Corals are mostly destroyed nowadays.
Corals have certain environmental conditions that they need in order to survive. These
factors limit where corals can live. The main factors that can affect the corals are
temperature, acidity, salinity, and sunlight. If researchers or well-wishers try to find the
destroying places’ environmental factors, they don't have any specific device to do that. So
they are facing a lot of problems while taking a reading in that environment. It is also so hard
to find a suitable place(with good environmental factors) for new coral growth projects.

So, we plan to create a device to measure the temperature, acidity, salinity, and
sunlight once and send readings to the database and then display them on a website with
graphical analytics. So, we can give this device to the environment department or any other
society or researchers, and they can check the analytics and take action accordingly, or use
it to select the best environment to grow new corals or clean the polluted environment.
For the current situation, they took these measurements individually for every factor
(There is no combined system exit). But that is very difficult and time-consuming. And these
readings are not very accurate, so we need to take the readings for at least one day, after
which we need to upload those measurements manually and take the decision according to
those measurements.

Our device can take all the measurements at once, and it will store all the readings
itself for a one-day period. Then we can take it out of the water. After that, it can upload all
the measurements to the cloud. We can retrieve all the data by using our website. It will
show the analytics of those measurements. We will provide the best web-based UI so they
can easily understand analytics and compare past data history. When they put the device
into the water, they don't need to spend time on observing that. The device can be taken
after one day (24 hours). So, testing time will be minimized and user time saved compared
to the current situation. The data includes locations also, so we can identify the locations
easily again.

However, our system (device + website) will be able to solve the problem of taking
measurements of coral growing environmental factors and will be very useful for users.

## Solution Architecture


![0 drawio (1)](https://user-images.githubusercontent.com/73667144/204257372-082ade0f-4162-4f16-8a4b-d1a2332ae505.jpg)


## Hardware and Software Designs


![image](https://user-images.githubusercontent.com/73667144/204257594-2347aa62-d789-4b93-af4e-aa38f7ee7182.png)

## Unit testing

Testing for individual units and components

Done during the development

Can use Jest Javascript testing framework

For NodeJs and React.js

## Scalability&Load Testing

Behaviors when a large number of users access

Speed, Response time, and Stability?

Jmeter tool

## Security Testing

Avoid Security risks

Zed Attack proxy tool

Open source

## Hardware Testing

Check Connections 

Inputs and Outputs

PlatformIO
```
{
  "title": "This is the title of the project",
  "team": [
    {
      "name": "Team Member Name 1",
      "email": "email@eng.pdn.ac.lk",
      "eNumber": "E/yy/xxx"
    },
    {
      "name": "Team Member Name 2",
      "email": "email@eng.pdn.ac.lk",
      "eNumber": "E/yy/xxx"
    },
    {
      "name": "Team Member Name 3",
      "email": "email@eng.pdn.ac.lk",
      "eNumber": "E/yy/xxx"
    }
  ],
  "supervisors": [
    {
      "name": "Dr. Supervisor 1",
      "email": "email@eng.pdn.ac.lk"
    },
    {
      "name": "Supervisor 2",
      "email": "email@eng.pdn.ac.lk"
    }
  ],
  "tags": ["Web", "Embedded Systems"]
}
```

