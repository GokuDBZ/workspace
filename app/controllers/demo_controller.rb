class DemoController < ApplicationController
    layout false
    
    def index
        
    end
    def particles
        render  text: File.read('config/particles.json')
    end
end
