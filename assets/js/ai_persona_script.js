    document.addEventListener('DOMContentLoaded', function() {
        const loadingContainer = document.getElementById('aiChatLoading');
        const chatIframe = document.getElementById('aiChatIframe');
        
        if (!loadingContainer || !chatIframe) return;
        
        let loadingComplete = false;
        
        // Progressive loading messages
        const loadingMessages = [
            { time: 500, text: 'Connecting to AI assistant...' },
            { time: 1500, text: 'Loading knowledge base...' },
            { time: 2500, text: 'Almost ready...' }
        ];
        
        // Update loading text progressively
        loadingMessages.forEach(({ time, text }) => {
            setTimeout(() => {
                if (!loadingComplete) {
                    const loadingText = loadingContainer.querySelector('.loading-text');
                    if (loadingText) loadingText.textContent = text;
                }
            }, time);
        });
        
        // Function to complete loading
        function completeLoading() {
            if (loadingComplete) return;
            loadingComplete = true;
            
            loadingContainer.style.transition = 'opacity 0.5s ease-out';
            loadingContainer.style.opacity = '0';
            
            setTimeout(() => {
                loadingContainer.style.display = 'none';
                chatIframe.style.display = 'block';
                chatIframe.style.opacity = '0';
                chatIframe.style.transition = 'opacity 0.5s ease-in';
                
                // Fade in iframe
                setTimeout(() => {
                    chatIframe.style.opacity = '1';
                }, 50);
            }, 500);
        }
        
        // Force complete loading after maximum 4 seconds
        setTimeout(completeLoading, 4000);
        
        // Try to detect when iframe content loads
        chatIframe.addEventListener('load', function() {
            setTimeout(completeLoading, 800);
        });
        
        // Fallback - click to skip loading
        loadingContainer.addEventListener('click', function() {
            completeLoading();
        });
        
        // Error handling
        chatIframe.addEventListener('error', function() {
            loadingComplete = true;
            const loadingText = loadingContainer.querySelector('.loading-text');
            const loadingSubtext = loadingContainer.querySelector('.loading-subtext');
            if (loadingText) loadingText.textContent = 'Connection failed';
            if (loadingSubtext) {
                loadingSubtext.innerHTML = '<a href="https://soopra.ai/ankita_mehta/chat" target="_blank" style="color: #4f46e5; text-decoration: underline;">Click here to open chat directly</a>';
            }
        });
    });