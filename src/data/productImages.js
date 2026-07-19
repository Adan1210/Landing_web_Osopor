import logoOsopor from "../assets/images/logo-osopor.webp";
import heroWarehouse from "../assets/images/hero-warehouse.webp";
import heroWarehouse2 from "../assets/images/hero-warehouse-2.webp";
import heroWarehouse4 from "../assets/images/hero-warehouse-4.webp";
import constructionWallDetail from "../assets/images/construction-wall-detail.webp";
import insulationPearlsMacro from "../assets/images/insulation-pearls-macro.webp";
import productPanels from "../assets/images/product-panels.webp";
import productFormworkBlocks from "../assets/images/product-formwork-blocks.webp";
import productEpsBeads from "../assets/images/product-eps-beads.webp";

export const LOGO_URL = logoOsopor;
export const HERO_IMAGES = [heroWarehouse, heroWarehouse2, heroWarehouse4];
export const CONSTRUCTION_IMG = constructionWallDetail;
export const INSULATION_IMG = insulationPearlsMacro;

// Order matches products.items in the i18n files (imgIndex 0/1/2):
// 0 = planchas (panels), 1 = casetones (roof void formers), 2 = perlas (beads)
export const PRODUCT_IMAGES = [productPanels, productFormworkBlocks, productEpsBeads];

// Individually-named exports so blog posts can reuse the same photography
// without re-importing/duplicating assets.
export const IMG_PLANCHAS = productPanels;
export const IMG_CASETONES = productFormworkBlocks;
export const IMG_PERLAS = productEpsBeads;
export const IMG_INSULATION_PEARLS = insulationPearlsMacro;
export const IMG_HERO_WAREHOUSE = heroWarehouse;
