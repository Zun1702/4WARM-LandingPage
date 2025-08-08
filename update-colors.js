// Script to update color classes from warm-color to warm.color syntax
const fs = require('fs');
const path = require('path');

const colorMappings = {
  'warm-yellow': 'warm.yellow',
  'warm-orange': 'warm.orange', 
  'warm-pink': 'warm.pink',
  'warm-red': 'warm.red',
  'primary-white': 'primary.white',
  'primary-charcoal': 'primary.charcoal',
  'primary-gray': 'primary.gray'
};

function updateFileColors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    Object.entries(colorMappings).forEach(([oldColor, newColor]) => {
      const regex = new RegExp(oldColor, 'g');
      if (content.includes(oldColor)) {
        content = content.replace(regex, newColor);
        updated = true;
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Update all component files
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    updateFileColors(path.join(componentsDir, file));
  }
});

console.log('Color class update completed!');
