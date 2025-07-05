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

    // Initialize on load
    initializeNetwork();