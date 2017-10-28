require 'test_helper'

class Categories < ActiveSupport::TestCase
    def setup
        @category = Category.new
    end
    
    test "category should be valid" do 
        assert @category.valid?
    end
    
end