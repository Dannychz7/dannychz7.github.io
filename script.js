// Enhanced SQL Injection simulation
function simulateSQLInjection() {
  const input = document.getElementById('sqlInput').value;
  const output = document.getElementById('sqlOutput');
  
  // Clear previous output
  output.innerHTML = '';
  
  // Add loading with typing effect
  const loadingMsg = document.createElement('div');
  loadingMsg.innerHTML = '<span class="loading-spinner"></span>Analyzing SQL payload...';
  output.appendChild(loadingMsg);

  setTimeout(() => {
    output.innerHTML = '';
    
    const timestamp = new Date().toLocaleTimeString();
    const sessionId = Math.random().toString(36).substr(2, 9);
    
    let lines = [
      `[${timestamp}] Session ID: ${sessionId}`,
      `[${timestamp}] Input received: "${input}"`,
      `[${timestamp}] Running pattern analysis...`,
      `[${timestamp}] Checking against known attack vectors...`,
    ];
    
    if (input.toLowerCase().includes("' or") || input.toLowerCase().includes('1=1') || input.toLowerCase().includes('--')) {
      lines.push(
        `[${timestamp}] CRITICAL: SQL Injection detected!`,
        `[${timestamp}] Threat Level: HIGH`,
        `[${timestamp}] Attack Vector: ${input.includes("' or") ? "OR-based injection" : "Comment-based injection"}`,
        `[${timestamp}] Source IP: 192.168.1.${Math.floor(Math.random() * 255)}`,
        `[${timestamp}] Countermeasures: Activated`,
        `[${timestamp}] Incident logged to SIEM`,
        `[${timestamp}] Connection terminated`
      );
    } else {
      lines.push(
        `[${timestamp}] No malicious patterns detected`,
        `[${timestamp}] Query classification: Safe`,
        `[${timestamp}] Risk Score: 0.05/1.0`,
        `[${timestamp}] Logged for analytics`
      );
    }
    
    // Type out each line with delay
    lines.forEach((line, index) => {
      setTimeout(() => {
        const lineDiv = document.createElement('div');
        lineDiv.textContent = line;
        if (line.includes('🚨') || line.includes('HIGH')) {
          lineDiv.style.color = '#ff4444';
        } else if (line.includes('✅')) {
          lineDiv.style.color = '#44ff44';
        }
        output.appendChild(lineDiv);
        output.scrollTop = output.scrollHeight;
      }, index * 300);
    });
    
  }, 1000);
}

// Enhanced ML simulation
function simulateML() {
  const output = document.getElementById('mlOutput');
  const networkViz = document.getElementById('networkViz');
  
  output.innerHTML = '';
  
  const loadingMsg = document.createElement('div');
  loadingMsg.innerHTML = '<span class="loading-spinner"></span>Initializing ML models...';
  output.appendChild(loadingMsg);

  setTimeout(() => {
    output.innerHTML = '';
    
    const threats = ['Trojan.Win32.Malware', 'Backdoor.Python.Shell', 'Ransomware.Crypto', 'Botnet.IRC.Client'];
    const threat = threats[Math.floor(Math.random() * threats.length)];
    const confidence = (Math.random() * 20 + 80).toFixed(1);
    const timestamp = new Date().toLocaleTimeString();
    
    const lines = [
      `[${timestamp}] Loading neural network weights...`,
      `[${timestamp}] Scanning network traffic patterns...`,
      `[${timestamp}] Analyzing ${Math.floor(Math.random() * 10000)} data points...`,
      `[${timestamp}] Cross-referencing with threat intelligence...`,
      `[${timestamp}] Anomaly detected at packet #${Math.floor(Math.random() * 1000)}`,
      `[${timestamp}] Classification: ${threat}`,
      `[${timestamp}] Confidence Score: ${confidence}%`,
      `[${timestamp}] Threat Level: ${confidence > 90 ? 'CRITICAL' : 'HIGH'}`,
      `[${timestamp}] Recommended Action: Immediate quarantine`
    ];
    
    lines.forEach((line, index) => {
      setTimeout(() => {
        const lineDiv = document.createElement('div');
        lineDiv.textContent = line;
        if (line.includes('🚨') || line.includes('CRITICAL')) {
          lineDiv.style.color = '#ff4444';
        } else if (line.includes('🎯') || line.includes('Classification')) {
          lineDiv.style.color = '#ffff44';
        }
        output.appendChild(lineDiv);
        output.scrollTop = output.scrollHeight;
      }, index * 400);
    });
    
    // Add threat nodes to network visualization
    setTimeout(() => {
      const threatNode = document.createElement('div');
      threatNode.className = 'network-node threat';
      threatNode.style.top = Math.random() * 80 + '%';
      threatNode.style.left = Math.random() * 80 + '%';
      networkViz.appendChild(threatNode);
    }, 2000);
    
  }, 1200);
}

// Initialize with some network nodes
function initializeNetwork() {
  const networkViz = document.getElementById('networkViz');
  for (let i = 0; i < 8; i++) {
    const node = document.createElement('div');
    node.className = 'network-node';
    node.style.top = Math.random() * 80 + '%';
    node.style.left = Math.random() * 80 + '%';
    node.style.animationDelay = Math.random() * 3 + 's';
    networkViz.appendChild(node);
  }
}

// Create matrix rain effect
function createMatrixRain() {
  const matrix = document.getElementById('matrix');
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  
  for (let i = 0; i < 50; i++) {
    const column = document.createElement('div');
    column.style.position = 'absolute';
    column.style.left = Math.random() * 100 + '%';
    column.style.animationDelay = Math.random() * 5 + 's';
    column.style.animationDuration = (Math.random() * 10 + 5) + 's';
    column.style.fontSize = Math.random() * 10 + 8 + 'px';
    column.style.color = '#00ff00';
    column.style.fontFamily = 'monospace';
    column.style.lineHeight = '1';
    column.style.pointerEvents = 'none';
    column.style.userSelect = 'none';
    
    let text = '';
    for (let j = 0; j < 20; j++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length)) + '<br>';
    }
    column.innerHTML = text;
    column.style.animation = 'matrixFall linear infinite';
    matrix.appendChild(column);
  }
}

// Create floating particles
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    container.appendChild(particle);
  }
}

// Add matrix fall animation and other styles
function addMatrixStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes matrixFall {
      0% { 
        transform: translateY(-100vh); 
        opacity: 0; 
      }
      10% { 
        opacity: 1; 
      }
      90% { 
        opacity: 1; 
      }
      100% { 
        transform: translateY(100vh); 
        opacity: 0; 
      }
    }
    
    @keyframes particleFloat {
      0% { 
        transform: translateY(100vh) rotate(0deg); 
        opacity: 0; 
      }
      10% { 
        opacity: 1; 
      }
      90% { 
        opacity: 1; 
      }
      100% { 
        transform: translateY(-100vh) rotate(360deg); 
        opacity: 0; 
      }
    }
    
    .particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: #00ff00;
      border-radius: 50%;
      animation: particleFloat linear infinite;
      box-shadow: 0 0 3px #00ff00;
    }
    
    #matrix {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
      pointer-events: none;
    }
    
    #particles {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
}

// Add random glitch effects
function initializeGlitchEffects() {
  setInterval(() => {
    const elements = document.querySelectorAll('h2');
    if (elements.length > 0) {
      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      randomElement.style.textShadow = '2px 0 0 #ff3333, -2px 0 0 #3333ff';
      setTimeout(() => {
        randomElement.style.textShadow = '0 0 5px #33ff33';
      }, 200);
    }
  }, 5000);
}

// Initialize all effects when DOM is ready
function initializeAllEffects() {
  // Add styles first
  addMatrixStyles();
  
  // Initialize network nodes
  initializeNetwork();
  
  // Create matrix rain effect
  createMatrixRain();
  
  // Create floating particles
  createParticles();
  
  // Start glitch effects
  initializeGlitchEffects();
}

// Auto-initialize when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAllEffects);
} else {
  initializeAllEffects();
}