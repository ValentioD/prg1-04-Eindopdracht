import { ImageSource, Sound, Resource, Loader } from 'excalibur';

const Resources = {}

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
        ResourceLoader.addResource(res);
}
    
export { Resources, ResourceLoader };