type PricingRule = {
    sku: string;
    name: string;
    price: number;
  };
  
  const pricingTable: PricingRule[] = [
    { sku: 'ipd', name: 'Super iPad', price: 549.99 },
    { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 },
    { sku: 'atv', name: 'Apple TV', price: 109.50 },
    { sku: 'vga', name: 'VGA adapter', price: 30.00 }
  ];
  
  const scanItems: string[] = ['atv', 'atv', 'atv', 'vga'];
  
  function calculateTotal(scannedItems: string[], pricingTable: PricingRule[]): number {
    const itemCounts: { [key: string]: number } = {};
    let totalPrice = 0;
  
    for (const item of scannedItems) {
      itemCounts[item] = (itemCounts[item] || 0) + 1;
    }
  
    for (const sku in itemCounts) {
      if (itemCounts.hasOwnProperty(sku)) {
        const item = pricingTable.find(rule => rule.sku === sku);
        const count = itemCounts[sku];
  
        if (item) {
          if (sku === 'atv') {
            const discountedCount = Math.floor(count / 3);
            totalPrice += (count - discountedCount) * item.price;
          } else if (sku === 'ipd' && count > 4) {
            totalPrice += count * 499.99;
          } else {
            totalPrice += count * item.price;
          }
        }
      }
    }
  
    return totalPrice;
  }
  
  console.log('Total expected: $' + calculateTotal(scanItems, pricingTable));
  
  