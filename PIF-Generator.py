import os
import random
from PIL import Image, ImageDraw, ImageFont


# Generate a placeholder image
def generate_image(width, height, text):
    # Create a new image with the given dimensions
    image = Image.new("RGB", (width, height), color=(255, 255, 255))

    # Get a drawing context
    draw = ImageDraw.Draw(image)

    # Choose a font and font size
    font = ImageFont.truetype("arial.ttf", size=50)

    # Determine the size of the text
    text_size = draw.textsize(text, font=font)

    # Calculate the position of the text
    text_position = ((width - text_size[0]) // 2, (height - text_size[1]) // 2)

    # Draw the text on the image
    draw.text(text_position, text, font=font, fill=(0, 0, 0))

    # Add some random noise to the image
    for x in range(width):
        for y in range(height):
            r, g, b = image.getpixel((x, y))
            r = max(0, min(255, r + random.randint(-10, 10)))
            g = max(0, min(255, g + random.randint(-10, 10)))
            b = max(0, min(255, b + random.randint(-10, 10)))
            image.putpixel((x, y), (r, g, b))

    # Return the generated image
    return image


# List of product names
product_names = [
    "Cartes De Visite",
    "Flyers",
    "Dépliants",
    "Brochures",
    "Affiches",
    "Chemises",
    "Chemise à Rabat",
    "Bloc Note",
    "Calendrier",
    "Lettres à en tete",
    "Enveloppe",
    "Carnet de tickets",
]

# Loop through the list of product names
for product_name in product_names:
    # Create a folder for the product
    folder_name = product_name.lower().replace(" ", "-")
    folder_path = f"./client/public/img/products/{folder_name}"
    os.makedirs(folder_path, exist_ok=True)

    # Generate 1 to 4 random images for the product
    num_images = 4
    for i in range(num_images):
        # Create a random image file
        image_name = f"{i+1}.jpg"
        image = generate_image(400, 400, f"{product_name} {i+1}")
        image_path = os.path.join(folder_path, image_name)

        # Write the image data to the file
        image.save(image_path)

        print(f"Created image: {image_path}")

    print(f"Created folder: {folder_path}")
