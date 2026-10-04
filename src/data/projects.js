export const projects = [
  {
    slug: "pqc-mqtt-testbed",
    title: "PQC-MQTT Performance Automation Testbed",
    category: "Systems & Security",
    dates: "June — August 2026",
    featured: true,
    github: "https://github.com/tansi0/pqc-mqtt-testbed",
    summary:
      "A reproducible Ubuntu Server benchmarking platform for post-quantum cryptography in MQTT 5.0 / TLS 1.3 under degraded network conditions.",
    problem:
      "Post-quantum migration discussions often focus on cryptographic cost while assuming reliable networks. Industrial IoT deployments frequently operate under latency, jitter and packet loss, so the real engineering question is how quantum-safe key exchange behaves under those conditions.",
    built: [
      "A four-layer Ubuntu Server testbed integrating OpenSSL/OQS, Eclipse Mosquitto, Python MQTT clients and Linux network emulation.",
      "A Python orchestration framework that reads experiment configuration, changes cryptographic and network conditions, launches isolated trials and writes structured CSV results.",
      "Automated statistical analysis and report generation for handshake time, MQTT connection time, throughput, latency, CPU and memory."
    ],
    results: [
      "Produced 7,886 valid measurements across 81 experimental conditions.",
      "Found that degraded network conditions contributed substantially more latency than algorithm choice in the tested environment.",
      "Documented timeout behaviour, resource usage, deployment recommendations and limitations in the public repository."
    ],
    stack: ["Python", "Ubuntu Server", "MQTT 5.0", "TLS 1.3", "OpenSSL", "liboqs", "Paho MQTT", "pandas", "psutil", "SciPy", "tc/netem"],
  },
  {
    slug: "adversarial-iot-ids",
    title: "Adversarial-Resilient Industrial IoT Intrusion Detection",
    category: "AI & Security",
    dates: "April 2026",
    featured: true,
    github: "https://github.com/tansi0/adversarial-iot-ids",
    summary:
      "An Industrial IoT intrusion-detection research project that compares classical and deep-learning models, attacks the models adversarially and investigates explainability-based defence.",
    problem:
      "Deep-learning intrusion detection can perform well on clean traffic but may fail when an attacker introduces carefully crafted perturbations. The project measures that failure directly instead of reporting clean-data accuracy alone.",
    built: [
      "A Python pipeline using a 286,450-sample stratified subset of Edge-IIoTset across 15 traffic classes.",
      "Random Forest, CNN, BiLSTM and a hybrid CNN + BiLSTM + Transformer architecture.",
      "FGSM adversarial evaluation and SHAP-based attribution analysis to investigate how model behaviour changes under attack."
    ],
    results: [
      "Random Forest achieved 97.79% clean-data accuracy; the hybrid model achieved 93.54%.",
      "Hybrid-model accuracy fell to 74.70% at FGSM epsilon 0.20, quantifying robustness degradation.",
      "Implemented a proof-of-concept SHAP attribution fingerprinting defence and documented its limitations rather than overstating results."
    ],
    stack: ["Python", "TensorFlow/Keras", "scikit-learn", "pandas", "NumPy", "SHAP", "Kaggle", "CNN", "BiLSTM", "Transformer"],
  },
  {
    slug: "secure-movie-booking",
    title: "Secure Movie Booking System",
    category: "Software & Security",
    dates: "2025 — 2026",
    featured: true,
    github: "https://github.com/tansi0/Secure-Web-Development-Project.",
    summary:
      "A PHP/MySQL booking application taken through a vulnerable-to-secure engineering process covering authentication, access control, transactions and web-security controls.",
    problem:
      "The application was intentionally developed with common web weaknesses so each issue could be identified, explained, remediated and validated in a controlled environment.",
    built: [
      "User registration/login, session handling, user/admin dashboards, movie CRUD and booking workflows.",
      "PDO prepared statements, server-side role enforcement, CSRF tokens, output encoding, password hashing and secure session controls.",
      "Transaction-based booking with SELECT ... FOR UPDATE to prevent seat overbooking during concurrent requests."
    ],
    results: [
      "Remediated SQL injection, XSS, CSRF, privilege escalation, race conditions and insecure session handling.",
      "Created structured security test cases for injection, XSS, CSRF, role manipulation and session timeout.",
      "Documented architecture, setup, security fixes and validation steps in the repository."
    ],
    stack: ["PHP", "MySQL", "JavaScript", "PDO", "Application Security", "OWASP", "PHPStan"],
  },
  {
    slug: "aws-wordpress-hardening",
    title: "AWS WordPress Infrastructure Hardening",
    category: "Cloud & Security",
    dates: "March 2026",
    featured: false,
    github: "https://github.com/tansi0/aws-wordpress-hardening",
    summary:
      "A defence-in-depth AWS EC2 deployment focused on host hardening, TLS, monitoring, network controls and security validation.",
    problem:
      "Internet-facing workloads need layered controls rather than relying on a single firewall or application setting.",
    built: [
      "A Linux workload on AWS EC2 using IAM, Security Groups, host firewalling, SSH hardening and TLS.",
      "Infrastructure monitoring and anomaly visibility using CloudWatch and Datadog.",
      "Validation workflows using network and web-security assessment tools."
    ],
    results: [
      "Created a layered hardening approach that separates cloud, host, service and monitoring controls.",
      "Produced repeatable documentation for deployment, validation and monitoring."
    ],
    stack: ["AWS EC2", "IAM", "Security Groups", "Linux", "TLS", "CloudWatch", "Datadog"],
  },
  {
    slug: "react-task-manager",
    title: "React Task Manager",
    category: "Software",
    dates: "2026",
    featured: false,
    github: "https://github.com/tansi0/Task-Manager-App",
    summary:
      "A lightweight React application for creating, filtering and completing tasks with browser persistence.",
    problem:
      "A compact project focused on component structure, state-driven UI behaviour and persistence without introducing unnecessary dependencies.",
    built: [
      "Separate form, filter and task components.",
      "Task state with active/done filtering and bulk clearing of completed items.",
      "localStorage read/write helpers so data survives browser refreshes."
    ],
    results: [
      "Produced a small, maintainable React codebase with clear component responsibilities.",
      "Used plain CSS instead of a UI framework to keep the implementation understandable and lightweight."
    ],
    stack: ["React 18", "JavaScript", "localStorage", "CSS"],
  },
  {
    slug: "catfx-sports",
    title: "CATFX Sports E-Commerce Storefront",
    category: "Web Development",
    dates: "2021",
    featured: false,
    github: "https://github.com/tansi0/catfx-sports",
    summary:
      "A multi-page sports e-commerce storefront built as an early large-scale front-end project across product categories, detail pages and cart flows.",
    problem:
      "The goal was to practise structuring and implementing a larger front-end experience rather than a single-page tutorial project.",
    built: [
      "Homepage, product-category pages, product-detail views and shopping-cart pages.",
      "Custom page architecture, product content, styling and JavaScript interactions on top of a provided template structure.",
      "Responsive layouts and interface components across multiple product categories."
    ],
    results: [
      "Created a complete multi-page storefront demonstrating early web-development breadth.",
      "The project is retained as an example of progression from front-end work into software, systems, AI and security engineering."
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "PHP"],
  },
];
