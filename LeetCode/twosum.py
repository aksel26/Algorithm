def twoSum (nums , target) :
    nums.sort()

    l,r =0, len(nums) - 1

    
    while l < r:
        if nums[l] + nums[r] > target : r-=1
        elif nums[l] + nums[r] < target :l+=1
            
        else : return True
    return False    


print(twoSum([2,1,5,7] , target = 4))