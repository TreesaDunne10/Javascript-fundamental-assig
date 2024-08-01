// Function to calculate and print estimated delivery time
function estimateDeliveryTime(packageType) {
    let deliveryTime;
    switch (packageType) {
        case 'standard':
            deliveryTime = '3-5 days';
            break;
        case 'express':
            deliveryTime = '1-2 days';
            break;
        case 'overnight':
            deliveryTime = 'next day';
            break;
        default:
            deliveryTime = 'unknown package type';
    }
    console.log(`Estimated delivery time for ${packageType} package: ${deliveryTime}`);
}

// Test the function with different package types
estimateDeliveryTime('standard'); // Estimated delivery time for standard package: 3-5 days
estimateDeliveryTime('express');  // Estimated delivery time for express package: 1-2 days
estimateDeliveryTime('overnight'); // Estimated delivery time for overnight package: next day
estimateDeliveryTime('economy');  // Estimated delivery time for economy package: unknown package type
