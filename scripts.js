document.addEventListener('DOMContentLoaded', function() {
    // Scene data with narration and animation HTML
    const sceneData = [
        {
            id: 1,
            narration: "Tired of juggling tabs just to ask AI a question? It's time-consuming and breaks your flow.",
            animationHtml: `
                <div class="scene1">
                    <div class="browser-window" style="width: 90%; height: 80%; left: 5%; top: 5%; background-color: white; border-radius: 8px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3); overflow: hidden; position: absolute;">
                        <div style="height: 32px; background-color: #f3f3f3; border-radius: 4px 4px 0 0; display: flex; align-items: center; padding: 0 10px;">
                            <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #ff6056; margin-right: 5px;"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #ffbd2e; margin-right: 5px;"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #27c93f; margin-right: 5px;"></div>
                            <div style="flex-grow: 1; text-align: center; color: #666;">Web Browser</div>
                        </div>
                        
                        <!-- Browser Tabs -->
                        <div style="height: 36px; background-color: #e0e0e0; display: flex; align-items: center; padding: 0 10px; border-bottom: 1px solid #ccc;">
                            <div class="browser-tab-header docs-tab" style="height: 30px; padding: 0 15px; background-color: white; border-radius: 5px 5px 0 0; margin-right: 10px; display: flex; align-items: center; box-shadow: 0 -2px 5px rgba(0,0,0,0.1); font-size: 12px; animation: tab-alternate 12s infinite;">
                                <span style="max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Melatonin - Wiki</span>
                            </div>
                            <div class="browser-tab-header chatgpt-tab" style="height: 30px; padding: 0 15px; background-color: #e0e0e0; border-radius: 5px 5px 0 0; display: flex; align-items: center; font-size: 12px; color: #555; animation: tab-alternate-reverse 12s infinite;">
                                <span style="max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">AI Assistant</span>
                            </div>
                        </div>
                        
                        <!-- Wikipedia Tab Content -->
                        <div class="tab-content docs-content" style="height: calc(100% - 68px); overflow: auto; padding: 1rem; animation: content-alternate 12s infinite;">
                            <div style="margin-top: 0; padding: 1rem; background-color: white; border-radius: 0 0 4px 4px; border: 1px solid #eee; height: calc(100% - 2rem); overflow: auto;">
                                <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                                    <div style="width: 50px; height: 50px; margin-right: 1rem;">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50">
                                            <path d="M120 0H8C3.58 0 0 3.58 0 8v112c0 4.42 3.58 8 8 8h112c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8z" fill="#fff"/>
                                            <path d="M64 29.74c-19.38 0-35.1 15.72-35.1 35.1s15.72 35.1 35.1 35.1 35.1-15.72 35.1-35.1-15.72-35.1-35.1-35.1zm0 65.9c-17 0-30.8-13.8-30.8-30.8s13.8-30.8 30.8-30.8 30.8 13.8 30.8 30.8-13.8 30.8-30.8 30.8z" fill="#000"/>
                                            <path d="M64 37.47c-15.1 0-27.37 12.27-27.37 27.37S48.9 92.2 64 92.2s27.37-12.27 27.37-27.37S79.1 37.47 64 37.47zm0 49.43c-12.18 0-22.06-9.88-22.06-22.06S51.82 42.78 64 42.78s22.06 9.88 22.06 22.06S76.18 86.9 64 86.9z" fill="#000"/>
                                        </svg>
                                    </div>
                                    <h1 style="font-size: 2rem; margin: 0;">Melatonin</h1>
                                </div>
                                <div style="display: flex; margin-bottom: 1rem; font-size: 0.9rem; color: #666;">
                                    <div style="margin-right: 1rem; padding: 0.3rem 0.5rem; background-color: #f8f9fa; border-radius: 3px;">Article</div>
                                    <div style="margin-right: 1rem; padding: 0.3rem 0.5rem;">Talk</div>
                                    <div style="flex-grow: 1;"></div>
                                    <div style="margin-right: 1rem; padding: 0.3rem 0.5rem;">Read</div>
                                    <div style="margin-right: 1rem; padding: 0.3rem 0.5rem;">Edit</div>
                                    <div style="padding: 0.3rem 0.5rem;">View history</div>
                                </div>
                                <p style="font-style: italic; color: #666; font-size: 0.9rem;">From Wikipedia, the free encyclopedia</p>
                                
                                <!-- Add chemical structure image -->
                                <div style="float: right; width: 300px; margin: 0 0 1rem 1rem; background-color: white; border: 1px solid #eee; border-radius: 4px; padding: 1rem;">
                                    <div style="text-align: center; font-weight: bold; margin-bottom: 0.5rem;">Melatonin</div>
                                    <div style="margin-bottom: 1rem;">
                                        <img src="images/melatonin-3d.png" alt="3D Chemical structure of Melatonin" style="width: 100%; height: auto;">
                                        <div style="text-align: center; font-size: 0.8rem; color: #666;">3D ball-and-stick model</div>
                                    </div>
                                </div>
                                
                                <p style="margin-top: 1rem; padding: 1rem; border-radius: 4px; background-color: rgba(63, 219, 171, 0.3); animation: highlight 2s infinite; color: #333;"><b>Melatonin</b>, an <span style="color: #0645ad;">indoleamine</span>, is a <span style="color: #0645ad;">natural compound</span> produced by various <span style="color: #0645ad;">organisms</span>, including <span style="color: #0645ad;">bacteria</span> and <span style="color: #0645ad;">eukaryotes</span>.<sup style="color: #0645ad;">[1]</sup> Its discovery in 1958 by <span style="color: #0645ad;">Aaron B. Lerner</span> and colleagues stemmed from the isolation of a substance from the <span style="color: #0645ad;">pineal gland</span> of cows that could induce skin lightening in <span style="color: #0645ad;">common frogs</span>. This compound was later identified as a hormone secreted in the brain during the night, playing a crucial role in regulating the sleep-wake cycle, also known as the <span style="color: #0645ad;">circadian rhythm</span>, in vertebrates.<sup style="color: #0645ad;">[2][3]</sup></p>
                                
                                <p style="margin-top: 1rem; color: #333;">In vertebrates, melatonin's functions extend to <span style="color: #0645ad;">synchronizing</span> sleep-wake cycles, encompassing sleep-wake timing and <span style="color: #0645ad;">blood pressure regulation</span>, as well as controlling seasonal rhythmicity <span style="color: #0645ad;">(circannual cycle)</span>, which includes reproduction, fattening, molting, and hibernation.<sup style="color: #0645ad;">[4]</sup> Its effects are mediated through the activation of <span style="color: #0645ad;">melatonin receptors</span> and its role as an <span style="color: #0645ad;">antioxidant</span>.<sup style="color: #0645ad;">[5][6][7]</sup> In plants and bacteria, melatonin primarily serves as a defense mechanism against <span style="color: #0645ad;">oxidative stress</span>, indicating its evolutionary significance.<sup style="color: #0645ad;">[8]</sup> The <span style="color: #0645ad;">mitochondria</span>, key organelles within cells, are the main producers of antioxidant melatonin,<sup style="color: #0645ad;">[9]</sup> underscoring the molecule's "ancient origins" and its fundamental role in protecting the earliest cells from reactive oxygen species.<sup style="color: #0645ad;">[10][11]</sup></p>
                                
                                <p style="margin-top: 1rem; color: #333;">In addition to its endogenous functions as a hormone and antioxidant, melatonin is also administered exogenously as a <span style="color: #0645ad;">dietary supplement</span> and medication. It is utilized in the treatment of <span style="color: #0645ad;">sleep disorders</span>, including <span style="color: #0645ad;">insomnia</span> and various <span style="color: #0645ad;">circadian rhythm sleep disorders</span>.</p>
                            </div>
                            
                            <div class="right-click-menu menu1" style="position: absolute; width: 120px; background-color: white; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); left: 32%; top: 52%; opacity: 0; animation: show-right-click1 12s infinite;">
                                <div style="padding: 8px 16px; border-bottom: 1px solid #eee; font-size: 12px; color: #333;">Cut</div>
                                <div style="padding: 8px 16px; border-bottom: 1px solid #eee; font-size: 12px; color: #333; background: rgba(0,123,255,0.1); font-weight: bold;">Copy</div>
                                <div style="padding: 8px 16px; font-size: 12px; color: #333;">Paste</div>
                            </div>
                        </div>
                        
                        <!-- ChatGPT Tab Content -->
                        <div class="tab-content chatgpt-content" style="height: calc(100% - 68px); padding: 1rem; background-color: #f9f9f9; overflow: hidden; position: relative; animation: content-alternate-reverse 12s infinite;">
                            <div class="paste-effect paste1" style="position: absolute; width: 90%; left: 5%; top: 20%; opacity: 0; animation: paste-appear1 12s infinite;">
                                <div style="width: 100%; padding: 1rem; background-color: white; border-radius: 8px; border: 1px solid #ddd; color: #666; font-size: 1rem; box-shadow: 0 1px 2px rgba(0,0,0,0.1); position: relative;">
                                    <div class="typing-effect1" style="width: 0%; overflow: hidden; white-space: nowrap; animation: type-text1 12s infinite;">Melatonin, an indoleamine, is a natural compound produced by various organisms, including bacteria and eukaryotes. Its discovery in 1958 by Aaron B. Lerner and colleagues stemmed from the isolation of a substance from the pineal gland of cows that could induce skin lightening in common frogs.</div>
                                    <div style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); width: 32px; height: 32px; background-color: #0567a7; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                                        <i class="fas fa-paper-plane"></i>
                                    </div>
                                </div>
                                
                                <div class="ai-response" style="width: 100%; margin-top: 1.5rem; padding: 1rem; background-color: white; border-radius: 8px; border: 1px solid #ddd; color: #333; font-size: 0.95rem; box-shadow: 0 1px 2px rgba(0,0,0,0.1); opacity: 0; animation: response-appear 12s infinite;">
                                    <p>his colleagues marked a significant advancement in our understanding of circadian biology.[1] Initially isolated from the pineal gland of cows, melatonin was named for its ability to lighten skin pigmentation in amphibians by acting on melanophores. Over time, its role as a regulator of sleep-wake cycles in humans became well-established.</p>
                                    <p>In mammals, melatonin is synthesized primarily in the pineal gland from the amino acid tryptophan, following a pathway that includes serotonin as an intermediate. The production and release of melatonin are closely tied to the light-dark cycle, with levels peaking during the night, thereby promoting sleep. Beyond its function in circadian rhythm regulation, melatonin also exhibits antioxidant properties and has been implicated in immune function, aging, and various physiological processes across species.</p>
                                    <p style="margin-top: 1rem;">Would you like this expanded into a full paragraph for a paper or something more concise?</p>
                                    <div style="display: flex; margin-top: 1rem; gap: 0.5rem;">
                                        <div style="padding: 0.5rem; color: #666; cursor: pointer; border-radius: 4px;"><i class="far fa-copy"></i></div>
                                        <div style="padding: 0.5rem; color: #666; cursor: pointer; border-radius: 4px;"><i class="far fa-thumbs-up"></i></div>
                                        <div style="padding: 0.5rem; color: #666; cursor: pointer; border-radius: 4px;"><i class="far fa-thumbs-down"></i></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="right-click-menu paste-menu menu-paste1" style="position: absolute; width: 120px; background-color: white; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); left: 32%; top: 45%; opacity: 0; animation: show-paste-menu1 12s infinite;">
                                <div style="padding: 8px 16px; border-bottom: 1px solid #eee; font-size: 12px; color: #333;">Cut</div>
                                <div style="padding: 8px 16px; border-bottom: 1px solid #eee; font-size: 12px; color: #333;">Copy</div>
                                <div style="padding: 8px 16px; font-size: 12px; color: #333; background: rgba(0,123,255,0.1); font-weight: bold;">Paste</div>
                            </div>
                        </div>
                    </div>
                </div>
                <style>
                    .scene1 .line1 { background: transparent; animation: highlight1 12s infinite; }
                    
                    @keyframes highlight1 {
                        0%, 3% { background: yellow; }
                        4%, 100% { background: transparent; }
                    }
                    
                    /* Tab switching animations */
                    @keyframes tab-alternate {
                        0%, 8% { background-color: white; font-weight: bold; color: #333; }
                        9%, 100% { background-color: #e0e0e0; font-weight: normal; color: #555; }
                    }
                    
                    @keyframes tab-alternate-reverse {
                        0%, 8% { background-color: #e0e0e0; font-weight: normal; color: #555; }
                        9%, 100% { background-color: white; font-weight: bold; color: #333; }
                    }
                    
                    /* Content display animations */
                    @keyframes content-alternate {
                        0%, 8% { display: block; opacity: 1; }
                        9%, 100% { display: none; opacity: 0; }
                    }
                    
                    @keyframes content-alternate-reverse {
                        0%, 8% { display: none; opacity: 0; }
                        9%, 100% { display: block; opacity: 1; }
                    }
                    
                    @keyframes show-right-click1 {
                        0%, 2% { opacity: 0; }
                        3%, 5% { opacity: 1; }
                        6%, 100% { opacity: 0; }
                    }
                    
                    @keyframes show-paste-menu1 {
                        0%, 8% { opacity: 0; }
                        9%, 10% { opacity: 1; }
                        11%, 100% { opacity: 0; }
                    }
                    
                    @keyframes paste-appear1 {
                        0%, 9% { opacity: 0; }
                        10%, 100% { opacity: 1; }
                    }
                    
                    @keyframes type-text1 {
                        0%, 9% { width: 0%; }
                        10%, 12% { width: 0%; }
                        15%, 100% { width: 100%; }
                    }
                    
                    @keyframes response-appear {
                        0%, 16% { opacity: 0; }
                        18%, 100% { opacity: 1; }
                    }
                </style>
            `
        },
        {
            id: 2,
            narration: "Meet Cenvoy—the browser extension that brings AI right where you work. No extra tabs, no lost focus.",
            animationHtml: `
                <div class="scene2">
                    <div class="browser-window" style="width: 90%; height: 80%; left: 5%; top: 5%; background-color: white; border-radius: 8px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3); overflow: hidden; position: absolute;">
                        <div style="height: 32px; background-color: #f3f3f3; border-radius: 4px 4px 0 0; display: flex; align-items: center; padding: 0 10px;">
                            <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #ff6056; margin-right: 5px;"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #ffbd2e; margin-right: 5px;"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #27c93f; margin-right: 5px;"></div>
                            <div style="flex-grow: 1; text-align: center; color: #666;">Web Browser</div>
                        </div>
                        
                        <!-- Browser Tabs -->
                        <div style="height: 36px; background-color: #e0e0e0; display: flex; align-items: center; padding: 0 10px; border-bottom: 1px solid #ccc;">
                            <div class="browser-tab-header docs-tab" style="height: 30px; padding: 0 15px; background-color: white; border-radius: 5px 5px 0 0; margin-right: 10px; display: flex; align-items: center; box-shadow: 0 -2px 5px rgba(0,0,0,0.1); font-size: 12px;">
                                <span style="max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Melatonin - Wiki</span>
                            </div>
                        </div>
                        
                        <!-- Wiki Content -->
                        <div class="tab-content docs-content" style="height: calc(100% - 68px); overflow: auto; padding: 1rem;">
                            <div style="margin-top: 0; padding: 1rem; background-color: white; border-radius: 0 0 4px 4px; border: 1px solid #eee; height: calc(100% - 2rem); overflow: auto;">
                                <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                                    <div style="width: 50px; height: 50px; margin-right: 1rem;">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50">
                                            <path d="M120 0H8C3.58 0 0 3.58 0 8v112c0 4.42 3.58 8 8 8h112c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8z" fill="#fff"/>
                                            <path d="M64 29.74c-19.38 0-35.1 15.72-35.1 35.1s15.72 35.1 35.1 35.1 35.1-15.72 35.1-35.1-15.72-35.1-35.1-35.1zm0 65.9c-17 0-30.8-13.8-30.8-30.8s13.8-30.8 30.8-30.8 30.8 13.8 30.8 30.8-13.8 30.8-30.8 30.8z" fill="#000"/>
                                            <path d="M64 37.47c-15.1 0-27.37 12.27-27.37 27.37S48.9 92.2 64 92.2s27.37-12.27 27.37-27.37S79.1 37.47 64 37.47zm0 49.43c-12.18 0-22.06-9.88-22.06-22.06S51.82 42.78 64 42.78s22.06 9.88 22.06 22.06S76.18 86.9 64 86.9z" fill="#000"/>
                                        </svg>
                                    </div>
                                    <h1 style="font-size: 2rem; margin: 0;">Melatonin</h1>
                                </div>
                                <div style="display: flex; margin-bottom: 1rem; font-size: 0.9rem; color: #666;">
                                    <div style="margin-right: 1rem; padding: 0.3rem 0.5rem; background-color: #f8f9fa; border-radius: 3px;">Article</div>
                                    <div style="margin-right: 1rem; padding: 0.3rem 0.5rem;">Talk</div>
                                    <div style="flex-grow: 1;"></div>
                                    <div style="margin-right: 1rem; padding: 0.3rem 0.5rem;">Read</div>
                                    <div style="margin-right: 1rem; padding: 0.3rem 0.5rem;">Edit</div>
                                    <div style="padding: 0.3rem 0.5rem;">View history</div>
                                </div>
                                <p style="font-style: italic; color: #666; font-size: 0.9rem;">From Wikipedia, the free encyclopedia</p>
                                
                                <!-- Add chemical structure image -->
                                <div style="float: right; width: 300px; margin: 0 0 1rem 1rem; background-color: white; border: 1px solid #eee; border-radius: 4px; padding: 1rem;">
                                    <div style="text-align: center; font-weight: bold; margin-bottom: 0.5rem;">Melatonin</div>
                                    <div style="margin-bottom: 1rem;">
                                        <img src="images/melatonin-3d.png" alt="3D Chemical structure of Melatonin" style="width: 100%; height: auto;">
                                        <div style="text-align: center; font-size: 0.8rem; color: #666;">3D ball-and-stick model</div>
                                    </div>
                                </div>
                                
                                <p style="margin-top: 1rem; padding: 1rem; border-radius: 4px; background-color: rgba(63, 219, 171, 0.3); animation: highlight 2s infinite; color: #333;"><b>Melatonin</b>, an <span style="color: #0645ad;">indoleamine</span>, is a <span style="color: #0645ad;">natural compound</span> produced by various <span style="color: #0645ad;">organisms</span>, including <span style="color: #0645ad;">bacteria</span> and <span style="color: #0645ad;">eukaryotes</span>.<sup style="color: #0645ad;">[1]</sup> Its discovery in 1958 by <span style="color: #0645ad;">Aaron B. Lerner</span> and colleagues stemmed from the isolation of a substance from the <span style="color: #0645ad;">pineal gland</span> of cows that could induce skin lightening in <span style="color: #0645ad;">common frogs</span>. This compound was later identified as a hormone secreted in the brain during the night, playing a crucial role in regulating the sleep-wake cycle, also known as the <span style="color: #0645ad;">circadian rhythm</span>, in vertebrates.<sup style="color: #0645ad;">[2][3]</sup></p>
                                
                                <p style="margin-top: 1rem; color: #333;">In vertebrates, melatonin's functions extend to <span style="color: #0645ad;">synchronizing</span> sleep-wake cycles, encompassing sleep-wake timing and <span style="color: #0645ad;">blood pressure regulation</span>, as well as controlling seasonal rhythmicity <span style="color: #0645ad;">(circannual cycle)</span>, which includes reproduction, fattening, molting, and hibernation.<sup style="color: #0645ad;">[4]</sup> Its effects are mediated through the activation of <span style="color: #0645ad;">melatonin receptors</span> and its role as an <span style="color: #0645ad;">antioxidant</span>.<sup style="color: #0645ad;">[5][6][7]</sup> In plants and bacteria, melatonin primarily serves as a defense mechanism against <span style="color: #0645ad;">oxidative stress</span>, indicating its evolutionary significance.<sup style="color: #0645ad;">[8]</sup> The <span style="color: #0645ad;">mitochondria</span>, key organelles within cells, are the main producers of antioxidant melatonin,<sup style="color: #0645ad;">[9]</sup> underscoring the molecule's "ancient origins" and its fundamental role in protecting the earliest cells from reactive oxygen species.<sup style="color: #0645ad;">[10][11]</sup></p>
                                
                                <p style="margin-top: 1rem; color: #333;">In addition to its endogenous functions as a hormone and antioxidant, melatonin is also administered exogenously as a <span style="color: #0645ad;">dietary supplement</span> and medication. It is utilized in the treatment of <span style="color: #0645ad;">sleep disorders</span>, including <span style="color: #0645ad;">insomnia</span> and various <span style="color: #0645ad;">circadian rhythm sleep disorders</span>.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="cenvoy-window" style="position: absolute; width: 700px; height: 700px; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(255, 255, 255, 0.7); border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.3); overflow: hidden;">
                        <div style="padding: 1rem; height: 100%; display: flex; flex-direction: column;">
                            <div style="height: 40px; background-color: var(--primary-color); border-radius: 8px; display: flex; align-items: center; padding: 0 1rem; color: white; margin-bottom: 1rem;">
                                <span style="font-weight: 500;">Cenvoy AI Assistant</span>
                                <div style="margin-left: auto; display: flex; gap: 10px;">
                                    <i class="fas fa-cog" style="font-size: 14px; opacity: 0.8;"></i>
                                    <i class="fas fa-times" style="font-size: 14px; opacity: 0.8;"></i>
                                </div>
                            </div>
                            <div style="flex-grow: 1; background-color: rgba(255, 255, 255, 0.5); border-radius: 8px; padding: 1.5rem; overflow-y: auto; border: 1px solid rgba(0, 0, 0, 0.05);">
                                <div style="display: flex; margin-bottom: 1.5rem;">
                                    <div style="width: 32px; height: 32px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; flex-shrink: 0;">
                                        <i class="fas fa-robot" style="font-size: 14px;"></i>
                                    </div>
                                    <div style="background-color: rgba(255, 255, 255, 0.9); padding: 15px 20px; border-radius: 0 12px 12px 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); font-size: 1rem; line-height: 1.6; color: #000;">
                                        <p style="margin: 0 0 15px 0; color: #000;">Melatonin is a naturally produced hormone that regulates sleep-wake cycles. It's widely used as a supplement for mild insomnia, jet lag, or shift work.</p>
                                        
                                        <div style="margin-bottom: 15px;">
                                            <strong style="color: var(--primary-color);">Pros:</strong>
                                            <ul style="margin: 8px 0 0 20px; padding: 0; color: #000;">
                                                <li>May help reset disrupted sleep rhythms</li>
                                                <li>Less habit-forming than prescription sleep aids</li>
                                                <li>Often easy to find</li>
                                            </ul>
                                        </div>
                                        
                                        <div style="margin-bottom: 15px;">
                                            <strong style="color: var(--primary-color);">Cons:</strong>
                                            <ul style="margin: 8px 0 0 20px; padding: 0; color: #000;">
                                                <li>May not address underlying anxiety or severe sleep disorders</li>
                                                <li>Can cause daytime grogginess</li>
                                                <li>Effectiveness varies</li>
                                            </ul>
                                        </div>
                                        
                                        <div style="margin-bottom: 15px;">
                                            <strong style="color: var(--primary-color);">Side Effects:</strong>
                                            <p style="margin: 8px 0 0 0; color: #000;">Headaches, dizziness, vivid dreams, possible interactions with other meds.</p>
                                        </div>
                                        
                                        <div style="margin-bottom: 15px;">
                                            <strong style="color: var(--primary-color);">Alternatives:</strong>
                                            <ul style="margin: 8px 0 0 20px; padding: 0; color: #000;">
                                                <li>Good sleep hygiene (consistent bedtime, avoiding screens before bed)</li>
                                                <li>Cognitive Behavioral Therapy for Insomnia (CBT-I)</li>
                                                <li>Relaxation techniques (mindfulness, yoga, meditation)</li>
                                                <li>Addressing anxiety (therapy, stress management, lifestyle changes)</li>
                                            </ul>
                                        </div>
                                        
                                        <p style="margin: 15px 0 0 0; font-style: italic; color: #000;">If anxiety is your main issue, melatonin alone might not resolve your sleep problems. Always check with a healthcare provider for personalized advice.</p>
                                    </div>
                                </div>
                                <div style="position: relative;">
                                    <input type="text" placeholder="Ask a follow-up question..." style="width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.1); background-color: white; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); font-size: 1rem;">
                                    <button style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background-color: var(--primary-color); color: white; border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                        <i class="fas fa-arrow-up" style="font-size: 12px;"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 3,
            narration: "Create custom templates for your recurring tasks—instantly reuse them anytime.",
            animationHtml: `
                <div class="scene3">
                    <div class="template-page">
                        <div style="padding: 1.5rem; height: 100%; display: flex; flex-direction: column; gap: 1.5rem; overflow-y: auto;">
                            <h2 style="font-size: 1.2rem; color: var(--primary-color); margin: 0;">Step 1: Describe Your Prompt</h2>
                            <p style="margin: 0; color: var(--gray-color); font-size: 0.9rem;">Describe what you want your prompt template to do, and we'll generate it for you.</p>
                            
                            <div style="width: 100%; border: 1px solid #ddd; border-radius: 8px; padding: 1rem; background-color: var(--light-color);">
                                <div class="typing-container" style="width: 100%; height: 240px; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; font-family: var(--font-main); background: white; overflow: hidden; position: relative;">
                                    <div class="typing-text" style="white-space: pre-wrap; height: 100%; animation: typing 2s steps(80, end) forwards;">I have sleeping issue due to anxiety and long working hours, does this fit into my treatment for sleep, give me pros cons sideeffects and recomend alternative solutions, short and concise</div>
                                </div>
                            </div>
                            
                            <button class="generate-btn" style="align-self: flex-start; background-color: var(--primary-color); color: white; border: none; padding: 0.7rem 1.5rem; border-radius: 4px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; animation: button-click 2s 5s infinite;">
                                <span>Generate Prompt Template</span>
                            </button>
                            
                            <h3 style="font-size: 1.2rem; margin: 1.5rem 0 1rem 0;">Existing Templates</h3>
                            
                            <table style="width: 100%; border-collapse: collapse;">
                                <thead>
                                    <tr style="border-bottom: 1px solid #ddd; text-align: left;">
                                        <th style="padding: 0.8rem 0.5rem;">Title</th>
                                        <th style="padding: 0.8rem 0.5rem;">Model</th>
                                        <th style="padding: 0.8rem 0.5rem;">API Key</th>
                                        <th style="padding: 0.8rem 0.5rem;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid #eee;">
                                        <td style="padding: 0.8rem 0.5rem;">Mock Coding Interview Challenge in Java with Improvement Suggestions</td>
                                        <td style="padding: 0.8rem 0.5rem;">gpt-4</td>
                                        <td style="padding: 0.8rem 0.5rem;">Default</td>
                                        <td style="padding: 0.8rem 0.5rem;">
                                            <div style="display: flex; gap: 0.5rem;">
                                                <button style="background-color: var(--primary-color); color: white; border: none; padding: 0.3rem 1rem; border-radius: 4px; font-size: 0.8rem;">Edit</button>
                                                <button style="background-color: #f44336; color: white; border: none; padding: 0.3rem 1rem; border-radius: 4px; font-size: 0.8rem;">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <style>
                        @keyframes button-click {
                            0%, 85%, 100% { transform: scale(1); }
                            90% { transform: scale(0.95); box-shadow: 0 0 15px rgba(74, 99, 238, 0.5); }
                        }
                        
                        @keyframes typing {
                            from { 
                                clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
                            }
                            to { 
                                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                            }
                        }
                        
                        @keyframes cursor-blink {
                            from, to { opacity: 1; }
                            50% { opacity: 0; }
                        }
                        
                        .typing-container .typing-cursor {
                            animation: cursor-blink 0.8s infinite, typing-cursor-move 4s steps(80, end) forwards;
                        }
                        
                        @keyframes typing-cursor-move {
                            from { left: 0.8rem; }
                            to { left: calc(100% - 0.8rem); }
                        }
                    </style>
                </div>
            `
        },
        {
            id: 4,
            narration: "Just type what you want, and Cenvoy transforms it into a perfect AI prompt—no technical know-how required.",
            animationHtml: `
                <div class="scene4">
                    <div class="template-page">
                        <div style="padding: 1.5rem; height: 100%; display: flex; flex-direction: column; gap: 1.5rem; overflow-y: auto;">
                            <h2 style="font-size: 1.2rem; color: var(--primary-color); margin: 0;">Step 1: Describe Your Prompt</h2>
                            <p style="margin: 0; color: var(--gray-color); font-size: 0.9rem;">Describe what you want your prompt template to do, and we'll generate it for you.</p>
                            
                            <div style="width: 100%; border: 1px solid #ddd; border-radius: 8px; padding: 1rem; background-color: var(--light-color);">
                                <textarea style="width: 100%; height: 240px; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; font-family: var(--font-main); resize: none; font-size: 0.9rem;">You are given a medicine name and a short description. 
From this information, generate a concise overview in the following format:

"[Medicine Name] is a/an [type or class of medicine] commonly used for [primary indication or use].

- Pros:

- Cons:

- Common Side Effects:

- Alternatives:

TL;DR:
- When it helps: [Brief summary of situations/conditions]
- When it may not: [Brief mention of limitations or contradictions]
- Seek professional advice: Always consult a healthcare provider for personalized guidance."

Make sure the output is concise and directly reflects any key points from the provided medicine name and description. If any details are missing, leave placeholders or make logical assumptions without inventing false data.</textarea>
                            </div>
                            
                            <button style="align-self: flex-start; background-color: var(--primary-color); color: white; border: none; padding: 0.7rem 1.5rem; border-radius: 4px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                                <span>Generate Prompt Template</span>
                            </button>
                            
                            <h3 style="font-size: 1.2rem; margin: 1.5rem 0 1rem 0;">Existing Templates</h3>
                            
                            <table style="width: 100%; border-collapse: collapse;">
                                <thead>
                                    <tr style="border-bottom: 1px solid #ddd; text-align: left;">
                                        <th style="padding: 0.8rem 0.5rem;">Title</th>
                                        <th style="padding: 0.8rem 0.5rem;">Model</th>
                                        <th style="padding: 0.8rem 0.5rem;">API Key</th>
                                        <th style="padding: 0.8rem 0.5rem;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid #eee;">
                                        <td style="padding: 0.8rem 0.5rem;">Mock Coding Interview Challenge in Java with Improvement Suggestions</td>
                                        <td style="padding: 0.8rem 0.5rem;">gpt-4</td>
                                        <td style="padding: 0.8rem 0.5rem;">Default</td>
                                        <td style="padding: 0.8rem 0.5rem;">
                                            <div style="display: flex; gap: 0.5rem;">
                                                <button style="background-color: var(--primary-color); color: white; border: none; padding: 0.3rem 1rem; border-radius: 4px; font-size: 0.8rem;">Edit</button>
                                                <button style="background-color: #f44336; color: white; border: none; padding: 0.3rem 1rem; border-radius: 4px; font-size: 0.8rem;">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 5,
            narration: "Chain prompts for deeper research or brainstorming—all seamlessly in one place.",
            animationHtml: `
                <div class="scene5">
                    <div class="workflow-chain">
                        <div class="workflow-step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <div style="font-weight: 600;">Extract Key Points</div>
                                <div style="font-size: 0.9rem; color: var(--gray-color);">Identify main arguments and evidence</div>
                            </div>
                        </div>
                        <div class="workflow-step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <div style="font-weight: 600;">Simplify Explanation</div>
                                <div style="font-size: 0.9rem; color: var(--gray-color);">Translate to plain language</div>
                            </div>
                        </div>
                        <div class="workflow-step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <div style="font-weight: 600;">Generate Questions</div>
                                <div style="font-size: 0.9rem; color: var(--gray-color);">Create insightful follow-up questions</div>
                            </div>
                        </div>
                        <div class="workflow-step">
                            <div class="step-number">+</div>
                            <div class="step-content">
                                <div style="font-weight: 600;">Add Next Step</div>
                                <div style="font-size: 0.9rem; color: var(--gray-color);">Customize your workflow</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 6,
            narration: "Students, devs, interviewers—everyone benefits. Let Cenvoy be your AI-powered assistant.",
            animationHtml: `
                <div class="scene6">
                    <div class="scenario-grid">
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div class="scenario-title">Students</div>
                            <div class="scenario-desc">Summarize complex readings and generate study questions.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-code"></i>
                            </div>
                            <div class="scenario-title">Developers</div>
                            <div class="scenario-desc">Get code explanations and debug assistance without switching context.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-user-tie"></i>
                            </div>
                            <div class="scenario-title">Recruiters</div>
                            <div class="scenario-desc">Craft interview questions and analyze candidate responses.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-pencil-alt"></i>
                            </div>
                            <div class="scenario-title">Writers</div>
                            <div class="scenario-desc">Improve content and generate creative ideas without losing flow.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div class="scenario-title">Analysts</div>
                            <div class="scenario-desc">Extract insights from data and generate visualization recommendations.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-language"></i>
                            </div>
                            <div class="scenario-title">Translators</div>
                            <div class="scenario-desc">Instantly translate content while maintaining context.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-chalkboard-teacher"></i>
                            </div>
                            <div class="scenario-title">Educators</div>
                            <div class="scenario-desc">Create lesson plans and educational materials tailored to different learning styles.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-briefcase-medical"></i>
                            </div>
                            <div class="scenario-title">Healthcare</div>
                            <div class="scenario-desc">Research medical topics and simplify complex health information.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-gavel"></i>
                            </div>
                            <div class="scenario-title">Legal</div>
                            <div class="scenario-desc">Review documents and extract key clauses without losing focus.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            <div class="scenario-title">E-commerce</div>
                            <div class="scenario-desc">Generate product descriptions and analyze customer reviews.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-film"></i>
                            </div>
                            <div class="scenario-title">Content Creators</div>
                            <div class="scenario-desc">Script outlines, video ideas, and content research all in one place.</div>
                        </div>
                        <div class="scenario-card">
                            <div class="scenario-icon">
                                <i class="fas fa-search"></i>
                            </div>
                            <div class="scenario-title">Researchers</div>
                            <div class="scenario-desc">Summarize academic papers and identify research gaps without tab-switching.</div>
                        </div>
                    </div>
                </div>
                <style>
                    .scene6 .scenario-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 1rem;
                        overflow-y: auto;
                        max-height: 95%;
                    }
                    
                    .scene6 .scenario-card {
                        transform: scale(0);
                        opacity: 0;
                        background: white;
                        border-radius: 12px;
                        padding: 1.5rem;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        border: 1px solid rgba(0,0,0,0.05);
                        transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), 
                                  opacity 0.6s ease,
                                  box-shadow 0.3s ease,
                                  border-color 0.3s ease;
                    }
                    
                    .scene6 .scenario-card:hover {
                        box-shadow: 0 8px 25px rgba(74, 99, 238, 0.15);
                        border-color: rgba(74, 99, 238, 0.2);
                        transform: scale(1.05) translateY(-5px) !important;
                    }
                    
                    .scene6 .scenario-card.visible {
                        transform: scale(1);
                        opacity: 1;
                    }
                    
                    .scene6 .scenario-icon {
                        width: 60px;
                        height: 60px;
                        background-color: rgba(74, 99, 238, 0.1);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 1rem;
                        color: var(--primary-color);
                        font-size: 1.5rem;
                    }
                    
                    .scene6 .scenario-title {
                        font-weight: 600;
                        font-size: 1.1rem;
                        margin-bottom: 0.5rem;
                        color: var(--dark-color);
                    }
                    
                    .scene6 .scenario-desc {
                        font-size: 0.9rem; 
                        color: var(--gray-color);
                    }
                    
                    @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                        100% { transform: scale(1); }
                    }
                    
                    @media (max-width: 1200px) {
                        .scene6 .scenario-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                    
                    @media (max-width: 900px) {
                        .scene6 .scenario-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    
                    @media (max-width: 600px) {
                        .scene6 .scenario-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                </style>
            `
        },
        {
            id: 7,
            narration: "Download Cenvoy today. Cut the clutter and harness AI's true power—right where you work.",
            animationHtml: `
                <div class="scene7">
                    <div class="cta-container">
                        <div class="cta-logo">Cenvoy</div>
                        <div class="cta-tagline">"Harness AI right where you work."</div>
                    </div>
                </div>
            `
        }
    ];

    // Function to show scene by id
    function showScene(sceneId) {
        // Update scene selector
        document.querySelectorAll('.scene').forEach(scene => {
            scene.classList.remove('active');
        });
        document.querySelector(`.scene[data-scene="${sceneId}"]`).classList.add('active');

        // Update narration
        const sceneData = window.sceneData.find(scene => scene.id === parseInt(sceneId));
        document.getElementById('narration-text').textContent = sceneData.narration;

        // Update animation
        const animationContainer = document.getElementById('animation-container');
        animationContainer.innerHTML = sceneData.animationHtml;

        // Add active class to make current scene visible
        const currentSceneElement = animationContainer.querySelector(`.scene${sceneId}`);
        if (currentSceneElement) {
            currentSceneElement.classList.add('active');
        }

        // Apply special animations based on scene
        if (sceneId === "2") {
            setTimeout(() => {
                const cenvoyWindow = document.querySelector('.scene2 .cenvoy-window');
                if (cenvoyWindow) cenvoyWindow.classList.add('active');
            }, 1000);
        } else if (sceneId === "5") {
            const steps = document.querySelectorAll('.scene5 .workflow-step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('visible');
                }, 500 + (index * 500));
            });
        } else if (sceneId === "6") {
            animateScene6Cards();
        } else if (sceneId === "7") {
            setTimeout(() => {
                document.querySelector('.scene7 .cta-logo').classList.add('visible');
            }, 500);
            setTimeout(() => {
                document.querySelector('.scene7 .cta-tagline').classList.add('visible');
            }, 1000);
        }
    }

    // Add sceneData globally available
    window.sceneData = sceneData;

    // Remove click event listeners for scenes - make non-interactive
    // document.querySelectorAll('.scene').forEach(scene => {
    //     scene.addEventListener('click', function() {
    //         const sceneId = this.getAttribute('data-scene');
    //         showScene(sceneId);
    //         
    //         // Update current scene
    //         currentScene = parseInt(sceneId);
    //         
    //         // Reset the auto-advance timer to start from this scene
    //         clearInterval(autoAdvanceTimer);
    //         startAutoAdvance();
    //     });
    // });

    // Show initial scene
    showScene("7");

    // Auto-advance scenes every 8 seconds
    let currentScene = 7;
    let autoAdvanceTimer;

    function startAutoAdvance() {
        if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
        
        const advanceScene = () => {
            currentScene = currentScene % 7 + 1;
            showScene(currentScene.toString());
            
            // Set the timer for the next scene - 8s for all scenes
            autoAdvanceTimer = setTimeout(advanceScene, 8000);
        };
        
        // Initial timer based on the current scene
        autoAdvanceTimer = setTimeout(advanceScene, 8000);
    }

    // Start the auto-advance immediately after page load
    startAutoAdvance();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to handle scene 6 card animations
    function animateScene6Cards() {
        const cards = document.querySelectorAll('.scene6 .scenario-card');
        cards.forEach((card, index) => {
            // Clear any existing animation
            card.style.animation = '';
            
            // Calculate row and column for wave effect
            const row = Math.floor(index / 4);
            const col = index % 4;
            
            // Calculate delay based on diagonal wave pattern
            const delay = (row + col) * 100;
            
            // Add visible class with staggered delay
            setTimeout(() => {
                card.classList.add('visible');
                
                // Add pulse animation to random cards after they appear
                if (Math.random() > 0.5) {
                    setTimeout(() => {
                        card.style.animation = `pulse 2s infinite ${Math.random() * 2}s`;
                    }, 1000);
                }
            }, delay);
        });
    }

    // Make all interactive elements in animations non-interactive
    function disableInteractions() {
        // Find all potentially interactive elements
        const interactiveElements = document.querySelectorAll(
            '.scene-animation button, .scene-animation input, .scene-animation textarea, ' +
            '.scene-animation a, .scene-animation [onclick], .scene-animation [onkeydown], ' +
            '.scene-animation [onmousedown], .scene-animation .browser-btn, .scene-animation [role="button"]'
        );
        
        // Disable each element
        interactiveElements.forEach(element => {
            element.disabled = true;
            element.setAttribute('tabindex', '-1');
            element.style.pointerEvents = 'none';
        });
    }

    // Apply interaction disabling after showing any scene
    const originalShowScene = showScene;
    showScene = function(sceneId) {
        originalShowScene(sceneId);
        
        // Disable interactions after scene is shown
        setTimeout(disableInteractions, 100);
        
        // If it's scene 6, use our enhanced animation
        if (sceneId === "6") {
            animateScene6Cards();
        }
    };

    // Also disable interactions initially
    setTimeout(disableInteractions, 100);
    
    // Prevent scrolling within scene elements
    document.querySelectorAll('.scene-animation, .scene-animation *[style*="overflow"]').forEach(element => {
        element.style.overflow = 'hidden';
    });
    
    // Disable right-click within animations
    document.querySelector('.scene-animation').addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
}); 