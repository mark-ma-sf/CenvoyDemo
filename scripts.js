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
                            
                            <button class="generate-btn" style="align-self: flex-start; background-color: var(--primary-color); color: white; border: none; padding: 0.7rem 1.5rem; border-radius: 4px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; animation: button-click 1.5s 2s forwards 2; position: relative; overflow: hidden;">
                                <i class="fas fa-bolt" style="animation: icon-pulse 1s ease-in-out infinite;"></i>
                                <span>Generate Prompt Template</span>
                                <span class="ripple" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 0; height: 0; border-radius: 50%; background-color: rgba(255, 255, 255, 0.4); animation: ripple-effect 1s 2.2s forwards;"></span>
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
                            0%, 5% { transform: scale(1); background-color: var(--primary-color); }
                            10% { transform: scale(1.1); background-color: #5a73fe; box-shadow: 0 0 20px rgba(74, 99, 238, 0.8); }
                            20% { transform: scale(0.9); background-color: #3fdbab; box-shadow: 0 0 25px rgba(63, 219, 171, 0.8); }
                            30% { transform: scale(1.05); background-color: #5a73fe; box-shadow: 0 0 20px rgba(74, 99, 238, 0.8); }
                            40% { transform: scale(0.95); background-color: #3fdbab; box-shadow: 0 0 25px rgba(63, 219, 171, 0.8); }
                            50% { transform: scale(1.03); background-color: var(--primary-color); box-shadow: 0 0 15px rgba(74, 99, 238, 0.5); }
                            100% { transform: scale(1); background-color: var(--primary-color); }
                        }
                        
                        @keyframes icon-pulse {
                            0% { transform: scale(1); }
                            50% { transform: scale(1.4); color: #ffcc00; }
                            100% { transform: scale(1); }
                        }
                        
                        @keyframes ripple-effect {
                            0% { width: 0; height: 0; opacity: 1; }
                            100% { width: 200px; height: 200px; opacity: 0; }
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
                                <div class="typing-container" style="width: 100%; height: 240px; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; font-family: var(--font-main); background: white; overflow: hidden; position: relative;">
                                    <div id="scene4-textarea" class="scrollable-textarea typing-text" style="width: 100%; height: 100%; white-space: pre-wrap; color: #333; font-size: 0.9rem; overflow-y: auto; animation: fast-typing 1s steps(200, end) forwards;">You are given a medicine name and a short description. 
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

Make sure the output is concise and directly reflects any key points from the provided medicine name and description. If any details are missing, leave placeholders or make logical assumptions without inventing false data.

The output should be accurate and helpful for someone trying to understand basic information about the medication.

Additionally, if there are any important precautions or contraindications, make sure to highlight those in the "cons" section.

For the "alternatives" section, include both pharmaceutical and lifestyle/non-pharmaceutical options when appropriate.

This format makes complex medical information easy to digest and provides a valuable reference for quick decision-making.</div>
                                </div>
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
                    <style>
                        @keyframes fast-typing {
                            from { 
                                clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
                            }
                            to { 
                                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                            }
                        }
                    </style>
                </div>
            `
        },
        {
            id: 5,
            narration: "Chain prompts for deeper research or brainstorming—all seamlessly in one place.",
            animationHtml: `
                <div class="scene5">
                    <div class="browser-window" style="width: 90%; height: 85%; left: 5%; top: 3%; background-color: #fcfcfc; border-radius: 12px; box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05), 0 5px 15px rgba(0, 0, 0, 0.08); overflow: hidden; position: absolute; opacity: 1.0; transform: translateY(0); transition: transform 0.3s ease, box-shadow 0.3s ease;">
                        <div style="position: absolute; top: 0; left: 0; right: 0; height: 40px; background: linear-gradient(90deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.01) 100%); z-index: 10; pointer-events: none;"></div>
                        <div style="height: 38px; background: linear-gradient(to bottom, #f7f7f7, #f0f0f0); border-radius: 12px 12px 0 0; display: flex; align-items: center; padding: 0 14px; border-bottom: 1px solid rgba(0, 0, 0, 0.07);">
                            <div style="display: flex; gap: 8px; margin-right: 15px;">
                                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #ff6056; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);"></div>
                                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #ffbd2e; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);"></div>
                                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #27c93f; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);"></div>
                            </div>
                            <div style="flex-grow: 1; text-align: center; color: #555; font-size: 13px; font-weight: 500;">Web Browser</div>
                        </div>
                        <!-- Browser Tabs -->
                        <div style="height: 40px; background-color: #f0f0f0; display: flex; align-items: center; padding: 0 14px; border-bottom: 1px solid rgba(0, 0, 0, 0.07);">
                            <div class="browser-tab-header docs-tab" style="height: 34px; padding: 0 18px; background: linear-gradient(to bottom, #ffffff, #f8f8f8); border-radius: 8px 8px 0 0; margin-right: 10px; display: flex; align-items: center; box-shadow: 0 -2px 8px rgba(0,0,0,0.05); font-size: 13px; font-weight: 500; border: 1px solid rgba(0,0,0,0.07); border-bottom: none;">
                                <span style="max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #444;">Chess Game System Design</span>
                            </div>
                        </div>
                        
                        <!-- Chess Design Tutorial Content -->
                        <div class="tab-content docs-content" style="height: calc(100% - 78px); overflow: auto; padding: 1.5rem; background-color: white; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.02);">
                            <div class="system-design-tutorial" style="padding: 1rem; height: 100%; overflow-y: auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;">
                                <div class="tutorial-header" style="margin-bottom: 1.5rem; border-bottom: 1px solid #f0f0f0; padding-bottom: 1rem;">
                                    <h1 style="font-size: 2rem; color: #333; font-weight: 600; margin-bottom: 0.5rem; letter-spacing: -0.01em;">Building a Multiplayer Chess Game: System Design Guide</h1>
                                    <div class="post-date" style="color: #6b7280; font-size: 0.9rem;">Posted 2 days ago · 12 min read</div>
                                </div>
                                
                                <div class="tutorial-content" style="color: #374151; font-size: 15px; line-height: 1.6;">
                                    <div class="section" style="margin-bottom: 2rem;">
                                        <h2 style="font-size: 1.5rem; color: #111; margin-bottom: 1rem; font-weight: 600;">1. Requirements Analysis</h2>
                                        <p style="margin-bottom: 1rem;">Let's design a multiplayer chess game that supports real-time gameplay and tournament features.</p>
                                        
                                        <div class="requirements-box" style="background-color: #f9fafb; border-radius: 8px; padding: 1.2rem; border: 1px solid #e5e7eb; margin: 1.2rem 0;">
                                            <h4 style="font-size: 1.1rem; margin-bottom: 0.8rem; color: #111; font-weight: 600;">Functional Requirements:</h4>
                                            <ul style="padding-left: 1.5rem; margin-bottom: 1.2rem;">
                                                <li>Real-time chess gameplay between two players</li>
                                                <li>Move validation and game state management</li>
                                                <li>Tournament system with brackets and rankings</li>
                                                <li>Chat functionality between players</li>
                                                <li>Game history and replay features</li>
                                            </ul>
                                            
                                            <h4 style="font-size: 1.1rem; margin-bottom: 0.8rem; color: #111; font-weight: 600;">Non-Functional Requirements:</h4>
                                            <ul style="padding-left: 1.5rem; margin-bottom: 0;">
                                                <li>Low latency (< 100ms for move updates)</li>
                                                <li>Support 10,000 concurrent games</li>
                                                <li>99.9% uptime for game servers</li>
                                                <li>Data consistency across all game states</li>
                                                <li>Secure authentication and anti-cheat measures</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="section" style="margin-bottom: 2rem;">
                                        <h2 style="font-size: 1.5rem; color: #111; margin-bottom: 1rem; font-weight: 600;">2. System Architecture</h2>
                                        <p style="margin-bottom: 1rem;">We'll implement a distributed architecture optimized for real-time gameplay:</p>
                                        
                                        <div class="architecture-diagram" style="background-color: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 1.2rem 0; text-align: center; border: 1px solid #e2e8f0;">
                                            <div class="diagram-component client" style="background-color: #dbeafe; padding: 0.6rem; border-radius: 6px; margin-bottom: 0.5rem; display: inline-block; min-width: 180px; font-weight: 500;">Game Clients</div>
                                            <div class="diagram-arrow" style="margin: 0.3rem 0; color: #64748b;">↓</div>
                                            <div class="diagram-component api-gateway" style="background-color: #e0f2fe; padding: 0.6rem; border-radius: 6px; margin-bottom: 0.5rem; display: inline-block; min-width: 180px; font-weight: 500;">Load Balancer</div>
                                            <div class="diagram-arrow" style="margin: 0.3rem 0; color: #64748b;">↓</div>
                                            <div class="diagram-services" style="display: flex; justify-content: center; gap: 0.8rem; flex-wrap: wrap; margin-bottom: 0.5rem;">
                                                <div class="diagram-component service" style="background-color: #dbeafe; padding: 0.5rem; border-radius: 6px; flex: 1; min-width: 130px; max-width: 200px; font-size: 0.9rem; font-weight: 500;">Game Service</div>
                                                <div class="diagram-component service" style="background-color: #dbeafe; padding: 0.5rem; border-radius: 6px; flex: 1; min-width: 130px; max-width: 200px; font-size: 0.9rem; font-weight: 500;">Matchmaking Service</div>
                                                <div class="diagram-component service" style="background-color: #dbeafe; padding: 0.5rem; border-radius: 6px; flex: 1; min-width: 130px; max-width: 200px; font-size: 0.9rem; font-weight: 500;">Tournament Service</div>
                                                <div class="diagram-component service" style="background-color: #dbeafe; padding: 0.5rem; border-radius: 6px; flex: 1; min-width: 130px; max-width: 200px; font-size: 0.9rem; font-weight: 500;">Chat Service</div>
                                            </div>
                                            <div class="diagram-arrow" style="margin: 0.3rem 0; color: #64748b;">↓</div>
                                            <div class="diagram-dbs" style="display: flex; justify-content: center; gap: 0.8rem; flex-wrap: wrap;">
                                                <div class="diagram-component db" style="background-color: #ccfbf1; padding: 0.5rem; border-radius: 6px; flex: 1; min-width: 120px; max-width: 180px; font-size: 0.9rem; font-weight: 500;">Game State DB</div>
                                                <div class="diagram-component db" style="background-color: #ccfbf1; padding: 0.5rem; border-radius: 6px; flex: 1; min-width: 120px; max-width: 180px; font-size: 0.9rem; font-weight: 500;">User DB</div>
                                                <div class="diagram-component db" style="background-color: #ccfbf1; padding: 0.5rem; border-radius: 6px; flex: 1; min-width: 120px; max-width: 180px; font-size: 0.9rem; font-weight: 500;">Tournament DB</div>
                                                <div class="diagram-component db" style="background-color: #ccfbf1; padding: 0.5rem; border-radius: 6px; flex: 1; min-width: 120px; max-width: 180px; font-size: 0.9rem; font-weight: 500;">Redis Cache</div>
                                            </div>
                                        </div>
                                        
                                        <div class="code-snippet" style="background-color: #1e293b; border-radius: 8px; overflow: hidden; margin: 1.5rem 0; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                                            <div style="background-color: #0f172a; padding: 0.5rem 1rem; color: #e2e8f0; font-size: 0.85rem; font-family: 'SF Mono', 'Menlo', monospace; display: flex; justify-content: space-between;">
                                                <span>game-handler.ts</span>
                                                <div style="display: flex; gap: 8px;">
                                                    <span style="opacity: 0.6;">TypeScript</span>
                                                    <span style="opacity: 0.6;">●</span>
                                                </div>
                                            </div>
                                            <pre style="margin: 0; padding: 1rem; color: #e2e8f0; overflow-x: auto; font-family: 'SF Mono', 'Menlo', monospace; font-size: 0.85rem; line-height: 1.5;"><code>// Game Service WebSocket handler example
class ChessGameHandler {
  async handleMove(gameId: string, move: Move) {
    const game = await this.gameState.get(gameId);
    
    // Validate move
    if (!this.isValidMove(game, move)) {
      throw new Error('Invalid move');
    }
    
    // Update game state
    const updatedGame = this.applyMove(game, move);
    
    // Broadcast to both players
    await this.broadcast(gameId, {
      type: 'MOVE_UPDATE',
      game: updatedGame
    });
    
    // Check for game end
    if (this.isGameOver(updatedGame)) {
      await this.handleGameEnd(gameId, updatedGame);
    }
  }
}</code></pre>
                                        </div>
                                    </div>
                                    
                                    <div class="section">
                                        <h2>3. Data Model</h2>
                                        <p>Our data model needs to efficiently represent game states and player information:</p>
                                        
                                        <div class="data-model-diagram">
                                            <div class="entity game-entity">
                                                <div class="entity-header">Game</div>
                                                <div class="entity-fields">
                                                    <div>id: UUID (PK)</div>
                                                    <div>whitePlayerId: UUID (FK)</div>
                                                    <div>blackPlayerId: UUID (FK)</div>
                                                    <div>currentPosition: JSON</div>
                                                    <div>moveHistory: JSON[]</div>
                                                    <div>status: ENUM</div>
                                                </div>
                                            </div>
                                            <div class="entity-relation">N:1</div>
                                            <div class="entity player-entity">
                                                <div class="entity-header">Player</div>
                                                <div class="entity-fields">
                                                    <div>id: UUID (PK)</div>
                                                    <div>username: VARCHAR</div>
                                                    <div>rating: INTEGER</div>
                                                    <div>gamesPlayed: INTEGER</div>
                                                    <div>wins: INTEGER</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="code-snippet">
                                            <pre><code>// PostgreSQL Schema example
CREATE TABLE games (
  id UUID PRIMARY KEY,
  white_player_id UUID REFERENCES players(id),
  black_player_id UUID REFERENCES players(id),
  current_position JSONB NOT NULL,
  move_history JSONB[] NOT NULL,
  status VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE players (
  id UUID PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  rating INTEGER NOT NULL DEFAULT 1500,
  games_played INTEGER NOT NULL DEFAULT 0,
  wins INTEGER NOT NULL DEFAULT 0
);</code></pre>
                                        </div>
                                    </div>
                                    
                                    <div class="section">
                                        <h2>4. Scalability & Performance</h2>
                                        <p>To handle our scalability requirements, we'll implement several strategies:</p>
                                        
                                        <div class="strategies-grid">
                                            <div class="strategy-card">
                                                <div class="strategy-icon">🎮</div>
                                                <div class="strategy-title">Game State Management</div>
                                                <div class="strategy-desc">Redis for active game states with PostgreSQL for persistence</div>
                                            </div>
                                            <div class="strategy-card">
                                                <div class="strategy-icon">⚡</div>
                                                <div class="strategy-title">WebSocket Clustering</div>
                                                <div class="strategy-desc">Sticky sessions and Redis pub/sub for real-time updates</div>
                                            </div>
                                            <div class="strategy-card">
                                                <div class="strategy-icon">🎯</div>
                                                <div class="strategy-title">Matchmaking</div>
                                                <div class="strategy-desc">Rating-based matchmaking with queue system</div>
                                            </div>
                                            <div class="strategy-card">
                                                <div class="strategy-icon">🔍</div>
                                                <div class="strategy-title">Anti-Cheat</div>
                                                <div class="strategy-desc">Server-side move validation and state verification</div>
                                            </div>
                                        </div>
                                        
                                        <div class="bottleneck-analysis">
                                            <h4>Potential Bottlenecks:</h4>
                                            <table>
                                                <tr>
                                                    <th>Component</th>
                                                    <th>Issue</th>
                                                    <th>Solution</th>
                                                </tr>
                                                <tr>
                                                    <td>Game State</td>
                                                    <td>High memory usage for active games</td>
                                                    <td>Redis cluster with sharding</td>
                                                </tr>
                                                <tr>
                                                    <td>WebSocket</td>
                                                    <td>Connection overhead</td>
                                                    <td>Connection pooling + keep-alive</td>
                                                </tr>
                                                <tr>
                                                    <td>Matchmaking</td>
                                                    <td>Queue processing delays</td>
                                                    <td>Distributed queue system</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    
                                    <div class="section">
                                        <h2>5. Security & Reliability</h2>
                                        <p>Implementing robust security measures and ensuring fault tolerance:</p>
                                        
                                        <div class="security-features">
                                            <div class="feature-item">
                                                <h4>Game Integrity</h4>
                                                <p>Server-side validation of all moves and game states:</p>
                                                <div class="code-snippet">
                                                    <pre><code>// Move validation example
function validateMove(game: Game, move: Move): boolean {
  // Check if it's the player's turn
  if (game.currentTurn !== move.playerId) {
    return false;
  }
  
  // Validate piece movement
  const piece = game.board[move.from];
  if (!isValidPieceMovement(piece, move)) {
    return false;
  }
  
  // Check for check/checkmate
  const newState = simulateMove(game, move);
  if (isInCheck(newState, move.playerId)) {
    return false;
  }
  
  return true;
}</code></pre>
                                                </div>
                                            </div>
                                            
                                            <div class="feature-item">
                                                <h4>Fault Tolerance</h4>
                                                <p>Implementing game state recovery and connection handling:</p>
                                                <div class="architecture-diagram fault-tolerance">
                                                    <div class="primary-node">Game Server A</div>
                                                    <div class="fallback-arrow">→</div>
                                                    <div class="fallback-node">Game Server B</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <!-- Add Cenvoy window to scene5 -->
                    <div class="cenvoy-window" style="position: absolute; width: 850px; height: 650px; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(255, 255, 255, 0.85); border-radius: 14px; box-shadow: 0 15px 50px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.3); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.4); overflow: hidden; z-index: 100;">
                        <div style="padding: 1.2rem; height: 100%; display: flex; flex-direction: column;">
                            <div style="height: 44px; background: linear-gradient(90deg, var(--primary-color), #4a63ee); border-radius: 10px; display: flex; align-items: center; padding: 0 1rem; color: white; margin-bottom: 1.2rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                                <div style="display: flex; align-items: center; font-weight: 500;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
                                        <path d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071L4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929C4.68342 9.90237 5.31658 9.90237 5.70711 10.2929L9 13.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z" fill="white"/>
                                    </svg>
                                    <span>Cenvoy AI Assistant</span>
                                </div>
                                <div style="margin-left: auto; display: flex; gap: 12px;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="opacity: 0.8;">
                                        <path d="M9 5C7.89543 5 7 5.89543 7 7V17C7 18.1046 7.89543 19 9 19H15C16.1046 19 17 18.1046 17 17V7C17 5.89543 16.1046 5 15 5H9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="opacity: 0.8;">
                                        <path d="M6 18L18 6M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div id="chat-container" style="flex-grow: 1; background-color: rgba(255, 255, 255, 0.7); border-radius: 10px; padding: 1.5rem; overflow-y: auto; border: 1px solid rgba(0, 0, 0, 0.05); box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);">
                                <!-- Chat messages will be added here dynamically -->
                            </div>
                            
                            <div style="position: relative; margin-top: 1.5rem;">
                                <input type="text" placeholder="Ask a follow-up question..." style="width: 100%; padding: 14px 16px; border-radius: 10px; border: 1px solid rgba(0, 0, 0, 0.08); background-color: white; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 219, 171, 0.1); font-size: 1rem; font-family: inherit; transition: all 0.2s ease;">
                                <button style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: linear-gradient(90deg, var(--secondary-color), #34c999); color: var(--dark-color); border: none; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); transition: all 0.2s ease;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="margin-left: 2px;">
                                        <path d="M13 5L21 12L13 19M21 12H3" stroke="var(--dark-color)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
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
        // Clear any existing animations
        if (window.textareaScrollInterval) {
            clearInterval(window.textareaScrollInterval);
        }
        
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
        } else if (sceneId === "3") {
            // Add auto-advance to next scene after button click animation
            setTimeout(() => {
                // Move to scene 4 after typing and button click animation finishes
                currentScene = 4;
                showScene("4");
                
                // Reset the auto-advance timer to give Scene 4 its full duration
                clearTimeout(autoAdvanceTimer);
                autoAdvanceTimer = setTimeout(() => {
                    currentScene = 5;
                    showScene("5");
                    // Restart normal auto-advance from scene 5
                    clearTimeout(autoAdvanceTimer);
                    startAutoAdvance();
                }, 8000); // Give Scene 4 the full 8 seconds duration
            }, 2500); // Wait for typing (2s) and button click animation to finish
        } else if (sceneId === "4") {
            // Add specific handling for scene4 textarea scrolling
            const textarea = document.getElementById('scene4-textarea');
            if (textarea) {
                // Wait for the typing animation to finish before scrolling
                setTimeout(() => {
                    // Reset scroll position
                    textarea.scrollTop = 0;
                    
                    // Create a scroll animation
                    let duration = 3000; // 3 seconds total
                    let scrollInterval;
                    let startTime;
                    
                    // Clear any existing animation
                    if (window.textareaScrollInterval) {
                        clearInterval(window.textareaScrollInterval);
                    }
                    
                    // Start new animation immediately
                    startTime = Date.now();
                    
                    // Calculate max scroll distance
                    const maxScroll = textarea.scrollHeight - textarea.clientHeight;
                    
                    // Create the scrolling animation 
                    scrollInterval = setInterval(() => {
                        const elapsed = Date.now() - startTime;
                        const progress = elapsed / duration;
                        
                        if (progress < 0.5) {
                            // Scroll down phase (0% to 50% of time)
                            const scrollProgress = progress * 2; // Scale to 0-1
                            textarea.scrollTop = maxScroll * scrollProgress;
                        } else if (progress < 0.8) {
                            // Hold at bottom (50% to 80% of time)
                            textarea.scrollTop = maxScroll;
                        } else if (progress < 1) {
                            // Scroll back up (80% to 100% of time)
                            const scrollProgress = 1 - ((progress - 0.8) * 5); // Scale to 1-0
                            textarea.scrollTop = maxScroll * scrollProgress;
                        } else {
                            // Animation complete
                            clearInterval(scrollInterval);
                        }
                    }, 16); // ~60fps
                    
                    // Store the interval so we can clear it later
                    window.textareaScrollInterval = scrollInterval;
                }, 1000); // Wait 1 second for typing animation to finish
            }
        } else if (sceneId === "5") {
            const steps = document.querySelectorAll('.scene5 .workflow-step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('visible');
                }, 500 + (index * 500));
            });
            
            // Add AI assistant window similar to scene2
            setTimeout(() => {
                const cenvoyWindow = document.querySelector('.scene5 .cenvoy-window');
                if (cenvoyWindow) cenvoyWindow.classList.add('active');
                
                // Get the chat container
                const chatContainer = document.querySelector('.scene5 .cenvoy-window div[style*="overflow-y: auto"]');
                if (chatContainer) {
                    // Reset scroll position and clear existing messages
                    chatContainer.scrollTop = 0;
                    
                    // Define chat messages to appear one by one with complete HTML per message
                    const messages = [
                        { 
                            sender: "interviewer",
                            innerHTML: `
                                <div style="display: flex; margin-bottom: 1.5rem; justify-content: flex-end; width: 100%;">
                                    <div style="background-color: rgba(74, 99, 238, 0.15); padding: 15px 20px; border-radius: 12px 0 12px 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); font-size: 0.9rem; line-height: 1.5; color: #000; max-width: 80%;">
                                        <p style="margin: 0 0 12px 0; font-weight: bold; color: #000;">Interviewer</p>
                                        <p style="margin: 0 0 12px 0; color: #000;">We want to build a chess game system with the ability to revert the last move. At a high level:</p>
                                        
                                        <ul style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li>We have players who can create and join games.</li>
                                            <li>The system needs to handle user input (moves) and enforce chess rules.</li>
                                            <li>Crucially, we want a feature that allows players to revert the immediately preceding move.</li>
                                        </ul>
                                        
                                        <p style="margin: 0; color: #000;">Could you give me your initial thoughts on how you'd approach this design? Include your assumptions, major functionalities, and a rough high-level architecture.</p>
                                    </div>
                                    <div style="width: 32px; height: 32px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: 12px; flex-shrink: 0;">
                                        <i class="fas fa-user" style="font-size: 14px;"></i>
                                    </div>
                                </div>
                            `
                        },
                        { 
                            sender: "interviewee",
                            innerHTML: `
                                <div style="display: flex; margin-bottom: 1.5rem; width: 100%;">
                                    <div style="width: 32px; height: 32px; background-color: #444; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; flex-shrink: 0;">
                                        <i class="fas fa-user-tie" style="font-size: 14px;"></i>
                                    </div>
                                    <div style="background-color: rgba(220, 220, 220, 0.9); padding: 15px 20px; border-radius: 0 12px 12px 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); font-size: 0.9rem; line-height: 1.5; color: #000; max-width: 80%;">
                                        <p style="margin: 0 0 12px 0; font-weight: bold; color: #000;">Interviewee</p>
                                        
                                        <p style="margin: 0 0 12px 0; color: #000;"><strong>1. Understanding & Use Cases</strong></p>
                                        
                                        <ol style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li><strong>Play Chess</strong>: Two players (or AI vs. human) interact with a board via moves.</li>
                                            <li><strong>Revert Last Move</strong>: Ability for a player to request undoing the most recent move, if allowed by the game rules or settings.</li>
                                            <li><strong>Game State Management</strong>: System must keep track of board state, moves history, timers, and game outcomes (checkmate, draw, resignation).</li>
                                            <li><strong>User Management</strong>: Players authenticate and create accounts, maintain rating/score.</li>
                                            <li><strong>Game Matching & Creation</strong>:
                                                <ul style="margin: 5px 0 5px 20px; padding: 0; color: #000;">
                                                    <li>Quick match or custom invites.</li>
                                                    <li>Potentially, real-time notifications when matches start or moves are made.</li>
                                                </ul>
                                            </li>
                                            <li><strong>Scalability</strong>: Potentially thousands of concurrent games at peak times.</li>
                                        </ol>
                                        
                                        <p style="margin: 0 0 12px 0; color: #000;"><strong>2. Assumptions</strong></p>
                                        
                                        <ul style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li>We assume this is a real-time, online chess platform.</li>
                                            <li>We assume players are primarily using web or mobile clients.</li>
                                            <li>We might store game states for up to millions of active games at once.</li>
                                            <li>Latency is important: Moves must be reflected in &lt;200ms to ensure a smooth user experience.</li>
                                        </ul>
                                        
                                        <p style="margin: 0 0 12px 0; color: #000;"><strong>3. High-Level Architecture (Initial Sketch)</strong></p>
                                        
                                        <ol style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li><strong>Frontend (Web/Mobile App)</strong>:
                                                <ul style="margin: 5px 0 5px 20px; padding: 0; color: #000;">
                                                    <li>Displays the chess board UI, captures user moves, requests undo, and updates game state.</li>
                                                    <li>Communicates with backend via WebSockets or HTTP (real-time vs. turn-based).</li>
                                                </ul>
                                            </li>
                                            <li><strong>Backend Services</strong>:
                                                <ol style="margin: 5px 0 5px 20px; padding: 0; color: #000;">
                                                    <li><strong>Game Service</strong>:
                                                        <ul style="margin: 5px 0 5px 20px; padding: 0; color: #000;">
                                                            <li>Orchestrates chess logic: verifies valid moves, maintains in-memory or near real-time state.</li>
                                                            <li>Keeps a log (stack) of moves for easy revert/undo functionality.</li>
                                                            <li>Possibly uses a rules engine or library for chess validations (e.g., checking if a move is legal).</li>
                                                        </ul>
                                                    </li>
                                                    <li><strong>User Service</strong>:
                                                        <ul style="margin: 5px 0 5px 20px; padding: 0; color: #000;">
                                                            <li>Authentication, user profiles, rating, match history.</li>
                                                        </ul>
                                                    </li>
                                                    <li><strong>Matchmaking Service</strong>:
                                                        <ul style="margin: 5px 0 5px 20px; padding: 0; color: #000;">
                                                            <li>Manages game creation, pairing players, or custom invites.</li>
                                                        </ul>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li><strong>Data Storage</strong>:
                                                <ul style="margin: 5px 0 5px 20px; padding: 0; color: #000;">
                                                    <li><strong>Transactional DB</strong> (SQL or NoSQL) for user profiles, game states, moves history.</li>
                                                    <li>In-memory cache (e.g., Redis) for quick lookups of active game states.</li>
                                                    <li>The <strong>undo</strong> functionality can be implemented by storing previous states or a moves log so we can revert to the prior state.</li>
                                                </ul>
                                            </li>
                                            <li><strong>Real-Time Communication</strong>:
                                                <ul style="margin: 5px 0 5px 20px; padding: 0; color: #000;">
                                                    <li>WebSocket layer for push notifications about opponent moves and game events.</li>
                                                </ul>
                                            </li>
                                        </ol>
                                        
                                        <p style="margin: 0 0 12px 0; color: #000;"><strong>4. Broad Technologies & Design Patterns</strong></p>
                                        
                                        <ul style="margin: 0 0 0 20px; padding: 0; color: #000;">
                                            <li><strong>Microservices</strong> approach (User Service, Game Service, Matchmaking).</li>
                                            <li><strong>Event-Driven</strong> or at least asynchronous notifications.</li>
                                            <li><strong>Caching</strong> with Redis to store current board states for quick retrieval and minimal DB overhead.</li>
                                            <li><strong>Message Queue</strong> (e.g., RabbitMQ, Kafka) for events if we expand to more complex features (like analytics, game streaming).</li>
                                        </ul>
                                    </div>
                                </div>
                            `
                        },
                        { 
                            sender: "interviewer",
                            innerHTML: `
                                <div style="display: flex; margin-bottom: 1.5rem; justify-content: flex-end; width: 100%;">
                                    <div style="background-color: rgba(74, 99, 238, 0.15); padding: 15px 20px; border-radius: 12px 0 12px 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); font-size: 0.9rem; line-height: 1.5; color: #000; max-width: 80%;">
                                        <p style="margin: 0 0 12px 0; font-weight: bold; color: #000;">Interviewer</p>
                                        <p style="margin: 0 0 12px 0; color: #000;">Based on that initial design, I have a few follow-up questions:</p>
                                        
                                        <ol style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li><strong>Peak Load Handling</strong>: How do you plan to handle peak times when thousands of games might be going on simultaneously?</li>
                                            <li><strong>Important Metrics & SLAs</strong>: What are the primary metrics and SLAs for our chess platform?</li>
                                            <li><strong>User Interaction Flow</strong>: Can you clarify how users interact with the system, from creating a game to finishing a match?</li>
                                            <li><strong>Geographical Considerations</strong>: Is the platform deployed in multiple regions? How do you handle latency across regions if, say, two players are in different continents?</li>
                                            <li><strong>Undo Feature</strong>: Can you elaborate on how you'd implement the revert/undo functionality, ensuring no data corruption?</li>
                                        </ol>
                                    </div>
                                    <div style="width: 32px; height: 32px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: 12px; flex-shrink: 0;">
                                        <i class="fas fa-user" style="font-size: 14px;"></i>
                                    </div>
                                </div>
                            `
                        },
                        { 
                            sender: "interviewee",
                            innerHTML: `
                                <div style="display: flex; margin-bottom: 1.5rem; width: 100%;">
                                    <div style="width: 32px; height: 32px; background-color: #444; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; flex-shrink: 0;">
                                        <i class="fas fa-user-tie" style="font-size: 14px;"></i>
                                    </div>
                                    <div style="background-color: rgba(220, 220, 220, 0.9); padding: 15px 20px; border-radius: 0 12px 12px 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); font-size: 0.9rem; line-height: 1.5; color: #000; max-width: 80%;">
                                        <p style="margin: 0 0 12px 0; font-weight: bold; color: #000;">Interviewee</p>
                                        
                                        <p style="margin: 0 0 12px 0; color: #000;"><strong>1. Peak Load Handling</strong></p>
                                        <ul style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li><strong>Scalability</strong>: We'd likely scale horizontally for our Game Service using container orchestration (e.g., Kubernetes). Each container handles a subset of active games.</li>
                                            <li><strong>Load Balancer</strong>: Directs requests or WebSocket connections to an appropriate container with minimal load.</li>
                                            <li><strong>Caching</strong>: Keep active game states in an in-memory store so that read/writes for the top ~10% of active games are extremely fast, offloading the main database.</li>
                                        </ul>
                                        
                                        <p style="margin: 0 0 8px 0; color: #000;"><strong>2. Important Metrics & SLAs</strong></p>
                                        <ul style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li><strong>Latency</strong>: P99 time for a move to be validated and visible to the opponent under 200ms.</li>
                                            <li><strong>Availability</strong>: 99.99% uptime for real-time gameplay.</li>
                                            <li><strong>Throughput</strong>: Number of moves processed per second, number of concurrent games.</li>
                                            <li><strong>Error Rates</strong>: Rate of invalid moves or system errors.</li>
                                        </ul>
                                        
                                        <p style="margin: 0 0 8px 0; color: #000;"><strong>3. User Interaction Flow</strong></p>
                                        <ul style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li><strong>Registration/Login</strong>: A new user signs up, or logs in.</li>
                                            <li><strong>Create/Join Game</strong>: The user either creates a new match or joins an existing (public or private) match.</li>
                                            <li><strong>In-Game Moves</strong>: Each move is submitted to the Game Service, which validates legality and updates the board.</li>
                                            <li><strong>Revert Last Move</strong>: If the feature is allowed (by game settings or mutual agreement), a request is sent to revert. The system pops the top move from the moves log and updates the board to the previous state.</li>
                                            <li><strong>Game Conclusion</strong>: Checkmate, stalemate, or resignation triggers the game record to finalize in the DB.</li>
                                        </ul>
                                        
                                        <p style="margin: 0 0 8px 0; color: #000;"><strong>4. Geographical Considerations</strong></p>
                                        <ul style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li><strong>Multi-Region Deployment</strong>: We can place servers in multiple regions to reduce latency. If players are from different continents, we may pick the region in the middle or replicate game state across data centers using a consistent, low-latency approach.</li>
                                            <li><strong>Data Synchronization</strong>: We'd consider a global load balancer or anycast-based approach so that both players connect to a region with minimal round-trip time.</li>
                                        </ul>
                                        
                                        <p style="margin: 0 0 8px 0; color: #000;"><strong>5. Undo/Revert Implementation</strong></p>
                                        <ul style="margin: 0 0 0 20px; padding: 0; color: #000;">
                                            <li><strong>Move Stack</strong>: For each game, we store moves in a stack-like structure. The top of the stack is the latest move.</li>
                                            <li><strong>Immutable Game States</strong>: Each move transition from state <code>S(n-1)</code> to <code>S(n)</code>. We can store <code>S(n)</code> or store only the move deltas.</li>
                                            <li><strong>Rollback</strong>: To revert, we pop the top move and revert to <code>S(n-1)</code>.</li>
                                            <li><strong>Data Integrity</strong>: We'll keep a short lock on the game state while reverting so no concurrent moves can conflict.</li>
                                        </ul>
                                    </div>
                                </div>
                            `
                        },
                        { 
                            sender: "interviewer",
                            innerHTML: `
                                <div style="display: flex; margin-bottom: 1.5rem; justify-content: flex-end; width: 100%;">
                                    <div style="background-color: rgba(74, 99, 238, 0.15); padding: 15px 20px; border-radius: 12px 0 12px 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); font-size: 0.9rem; line-height: 1.5; color: #000; max-width: 80%;">
                                        <p style="margin: 0 0 12px 0; font-weight: bold; color: #000;">Interviewer</p>
                                        <p style="margin: 0 0 12px 0; color: #000;">Let's zoom in on the <strong>Game Service</strong>. Specifically:</p>
                                        
                                        <ul style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li>How are you managing real-time state updates within the service?</li>
                                            <li>How do you ensure consistency and handle concurrency, especially if both players act near-simultaneously?</li>
                                            <li>Could you provide more details on how you store and retrieve board states, including the moves needed for undo?</li>
                                        </ul>
                                    </div>
                                    <div style="width: 32px; height: 32px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: 12px; flex-shrink: 0;">
                                        <i class="fas fa-user" style="font-size: 14px;"></i>
                                    </div>
                                </div>
                            `
                        },
                        { 
                            sender: "interviewee",
                            innerHTML: `
                                <div style="display: flex; margin-bottom: 1.5rem; width: 100%;">
                                    <div style="width: 32px; height: 32px; background-color: #444; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; flex-shrink: 0;">
                                        <i class="fas fa-user-tie" style="font-size: 14px;"></i>
                                    </div>
                                    <div style="background-color: rgba(220, 220, 220, 0.9); padding: 15px 20px; border-radius: 0 12px 12px 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); font-size: 0.9rem; line-height: 1.5; color: #000; max-width: 80%;">
                                        <p style="margin: 0 0 12px 0; font-weight: bold; color: #000;">Interviewee</p>
                                        
                                        <p style="margin: 0 0 12px 0; color: #000;"><strong>Detailed Design for the Game Service</strong></p>
                                        
                                        <p style="margin: 0 0 8px 0; color: #000;"><strong>1. Architecture & State Management</strong></p>
                                        <ul style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li>Each active game can be represented by an in-memory object (let's call it a <code>GameSession</code>) hosted in one container instance. This object has:
                                                <ol style="margin: 5px 0 5px 20px; padding: 0; color: #000;">
                                                    <li><strong>Current Board Position</strong>: Using a 2D matrix or a specialized chess representation (e.g., Forsyth–Edwards Notation).</li>
                                                    <li><strong>Moves Log</strong>: A stack/array containing the sequence of moves. Each move includes the piece moved, start position, end position, captured piece if any, etc.</li>
                                                </ol>
                                            </li>
                                            <li>For scaling, we might adopt a <strong>sharding</strong> approach where each container can handle a range of game IDs or a consistent hash based on the game's ID.</li>
                                        </ul>
                                        
                                        <p style="margin: 0 0 8px 0; color: #000;"><strong>2. Concurrency & Consistency</strong></p>
                                        <ul style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li><strong>Locking</strong>: When a player attempts a move or an undo, we lock that <code>GameSession</code> so no other conflicting action modifies it at the same moment. Once validated and updated, we release the lock.</li>
                                            <li><strong>Event Sequence</strong>: Because only one move can occur at a time in standard chess, we enforce a queue of actions. The system processes actions in the order they arrive to the server.</li>
                                        </ul>
                                        
                                        <p style="margin: 0 0 8px 0; color: #000;"><strong>3. Storage of Board States & Moves</strong></p>
                                        <ul style="margin: 0 0 12px 20px; padding: 0; color: #000;">
                                            <li><strong>In-Memory for Active Games</strong>: We keep the current board plus the move stack in memory for quick access.</li>
                                            <li><strong>Persistency</strong>: Periodically or after each move, we persist a minimal representation to the database—like the latest state plus the move that got us here.</li>
                                            <li><strong>Undo</strong>: When a revert is requested, we pop from the moves stack in memory. We also update or "append a revert event" to the database so that the final record stays consistent.</li>
                                        </ul>
                                        
                                        <p style="margin: 0 0 8px 0; color: #000;"><strong>4. Illustrative Diagram (Textual)</strong></p>
                                        <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px; font-size: 0.85rem; color: #333; white-space: pre; overflow: auto; margin: 0 0 12px 0;">
+----------------+       +----------------+
|  Game Service  | <---- |  User Service  |
| (In-memory)    |       |               |
|  - GameSession |       +----------------+
|  - Move Stack  | <--> Database
+----------------+
      ^  ^
      |  |
WebSockets / REST
      |  |
  Player Clients
                                        </pre>
                                        
                                        <p style="margin: 0 0 8px 0; color: #000;"><strong>Failure Modes & Mitigation</strong>:</p>
                                        <ul style="margin: 0 0 0 20px; padding: 0; color: #000;">
                                            <li>If a container crashes, we can <strong>rebuild</strong> the current game state from the last known persisted state plus the move logs in the DB.</li>
                                            <li>We might keep a <strong>replicated in-memory</strong> store (like Redis with clustering) that has the most recent states to reduce the recovery time.</li>
                                        </ul>
                                    </div>
                                </div>
                            `
                        }
                    ];
                    
                    // Clear any existing animation intervals
                    if (window.chatAnimationInterval) {
                        clearInterval(window.chatAnimationInterval);
                    }
                    
                    // Create and add message bubbles one by one
                    messages.forEach((message, index) => {
                        setTimeout(() => {
                            // Create message element and directly use provided innerHTML
                            const messageEl = document.createElement('div');
                            messageEl.className = `chat-bubble ${message.sender}-message`;
                            messageEl.innerHTML = message.innerHTML;
                            
                            // Add to chat container
                            chatContainer.appendChild(messageEl);
                            
                            // Scroll to bottom to show new message
                            chatContainer.scrollTop = chatContainer.scrollHeight;
                        }, 1000 + (index * 1200)); // Start after 1s, then add a new message every 1.2s
                    });
                }
            }, 1000);
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

    // Add click event listeners to scene selectors
    document.querySelectorAll('.scene').forEach(scene => {
        scene.addEventListener('click', function() {
            const sceneId = this.getAttribute('data-scene');
            showScene(sceneId);
            
            // Update current scene
            currentScene = parseInt(sceneId);
            
            // Reset the auto-advance timer to start from this scene
            clearInterval(autoAdvanceTimer);
            startAutoAdvance();
        });
    });

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
            
            // Set the timer for the next scene - 8s for all scenes except scene5
            const nextDuration = currentScene === 5 ? 12000 : 8000; // 20 seconds for scene5, 8 seconds for others
            autoAdvanceTimer = setTimeout(advanceScene, nextDuration);
        };
        
        // Initial timer based on the current scene
        const initialDuration = currentScene === 5 ? 12000 : 8000; // 20 seconds for scene5, 8 seconds for others
        autoAdvanceTimer = setTimeout(advanceScene, initialDuration);
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