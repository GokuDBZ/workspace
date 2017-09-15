name= 1
puts name
case name
when String then puts "this is string #{name}"
    
# when (1..20)
#     puts "this is number"
when (name > 0) then puts "greater than 1"
    
else
    puts "this is else #{name}"
    
end