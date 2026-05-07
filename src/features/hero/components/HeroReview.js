{/* Mobile: Stacked layout / Desktop: Swiper */}
            <>
                {/* Mobile View - Stacked */}
                <div className="block md:hidden space-y-6">
                    {/* Review Card */}
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex gap-1">
                        {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                        ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="font-medium text-gray-900 mb-2">What part of your experience could we improve?</p>
                        <div className="space-y-2">
                            {['Checkout process', 'Shipping & delivery', 'Customer support', 'Website navigation', 'All of it was awesome ✨'].map((item) => (
                            <label key={item} className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                                <input type="radio" name="issue" className="mr-3" />
                                <span className="text-sm sm:text-base">{item}</span>
                            </label>
                            ))}
                        </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <textarea 
                            placeholder="Any details you'd like to add? (Optional)" 
                            className="w-full p-3 border border-gray-200 rounded-lg resize-none text-sm"
                            rows={2}
                        />
                        </div>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Submit Feedback
                        </button>
                    </div>
                    </div>
                </div>
                
                {/* GIF Demo */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                    <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                    <img 
                        src="/demo.gif" 
                        alt="Diagnostix widget demo"
                        className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                    />
                    </div>
                </div>
                </div>

                {/* Desktop View - Swiper */}
            <div className="hidden md:block w-full max-w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                }}
                loop={true}
                speed={600}
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full"
            >
                    <SwiperSlide data-swiper-autoplay="6000">
                    <div className="p-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center justify-center mb-6">
                            <div className="flex gap-1">
                            {[1,2,3,4,5].map((star) => (
                                <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                            ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <p className="font-medium text-gray-900 mb-2">What part of your experience could we improve?</p>
                            <div className="space-y-2">
                                {['Checkout process', 'Shipping & delivery', 'Customer support', 'Website navigation', 'All of it was awesome ✨'].map((item) => (
                                <label key={item} className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                                    <input type="radio" name="issue" className="mr-3" />
                                    <span>{item}</span>
                                </label>
                                ))}
                            </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <textarea 
                                placeholder="Any details you'd like to add? (Optional)" 
                                className="w-full p-3 border border-gray-200 rounded-lg resize-none"
                                rows={2}
                            />
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Submit Feedback
                            </button>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide data-swiper-autoplay="25000">
                    <div className="p-6">
                        <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                        <img 
                            src="/demo.gif" 
                            alt="Diagnostix widget demo"
                            className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                        />
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </>
            
            {/* Waitlist link */}
            <div className="mt-6">
                <a 
                href="https://tally.so/r/Zjzek5" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                </a>
            </div>