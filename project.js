// Data for projects
let projectData = [
    {
        image: 'img/project-1.png',
        name: 'TB Detection using CDAMNet',
        detail: 'Developed and deployed a custom Convolution Neural Network incorporating advanced Swish activations, Multi-Fusion Residual (MFR) blocks, and Channel Shuffle Dual Attention (CSDA) modules for enhanced feature extraction and classification accuracy. Utilized TensorFlow and Keras frameworks for model construction and training, achieving significant performance improvements. Employed OpenCV for automated image preprocessing and implemented learning rate scheduling and checkpointing for optimization. Led a team to elevate model accuracy from 88.6% to 97%, demonstrating strong leadership and technical prowess in deep learning and image classification.',
        github: 'https://github.com/Yatz1403',
        tags: 'Complex Machine learning'
    },
    {
        image: 'img/project-2.png',
        name: 'Real life live violence detection model',
        detail: 'Engineered and deployed a real-time machine learning model leveraging Convolution Neural Networks (CNN) and Long Short-Term Memory (LSTM) networks for the detection of violent activities in live RTSP streams. Developed a robust video processing pipeline utilizing OpenCV for frame extraction and preprocessing, seamlessly integrating with existing surveillance infrastructures.',
        github: 'https://github.com/Yatz1403',
        tags: 'Complex Machine learning'
    },
    {
        image: 'img/project-3.png',
        name: 'Machine learning Based web app firewall (IPS) from scratch',
        detail: 'Developed a ML model which acts as a firewall to block malicious HTTP traffic. I intercepted the HTTP traffic using BurpSuite and decoded the traffic from the Base64 format and using this data as my main dataset, I trained ML the model to block malicious traffic.',
        github: 'https://github.com/Yatz1403',
        tags: 'Complex Machine learning'
    },
    {
        image: 'img/project-4.png',
        name: 'Autonomous Bot using ROS',
        detail: 'The project involves developing an autonomous bot that uses the Robot Operating System (ROS) for communication and control, enabling it to navigate and perform tasks in its environment without human intervention using “ROS nodes like SLAM and nav2”.',
        github: 'https://github.com/Yatz1403',
        tags: 'AI/Robotics'
    }
];

// Function to create project cards
const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML += `
        <div class="project-card" data-tags="${data.tags}">
            <div class="project-wrapper">
                <div class="project-thumbnail">
                    <img src="img/close.png" class="close-btn">
                    <img src="${data.image}" class="project-img">
                    <span class="tags">${data.tags}</span>
                </div>
                <div class="project-body">
                    <h1 class="project-name">${data.name}</h1>
                    <p class="project-detail">${data.detail}</p>
                    <a href="${data.github}" class="btn">GitHub</a>
                </div>
            </div>
        </div>
    `;
};

// Create project cards
projectData.forEach(data => createProjectCards(data));