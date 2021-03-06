// @ts-ignore
import * as path from 'path';
import * as fs from 'fs';
import svg2img from 'svg2img';
import defaultOptions from './defaultOptions';
import buildIconsType from '@meetio/meetio-icons';

export interface ISettings {
    size: number;
    suffix: string | boolean;
}

fs.readdirSync('./scripts/icons/textures/').forEach((icon: any) => {
    const iconPath = path.join(__dirname, `/textures/${icon}`);
    icon = icon
        .split('.')
        .slice(0, -1)
        .join('.');
    fs.readFile(iconPath, 'utf8', (err: any, data: any) => {
        if (err) throw err;
        data = Buffer.from(data, 'utf8');
        defaultOptions.forEach((setting: ISettings) => {
            svg2img(
                data,
                { width: setting.size, height: setting.size },
                (_: any, buffer: Buffer) => {
                    fs.writeFileSync(
                        `textures/${
                            setting.suffix ? icon + setting.suffix : icon
                        }.png`,
                        buffer
                    );
                }
            );
        });
    });
});

buildIconsType();
