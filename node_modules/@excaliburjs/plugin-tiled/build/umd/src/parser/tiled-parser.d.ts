import { z } from 'zod';
declare const TiledProperty: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"int">;
    value: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "int";
    value: number;
}, {
    name: string;
    type: "int";
    value: number;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"bool">;
    value: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "bool";
    value: boolean;
}, {
    name: string;
    type: "bool";
    value: boolean;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"float">;
    value: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "float";
    value: number;
}, {
    name: string;
    type: "float";
    value: number;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"string">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "string";
    value: string;
}, {
    name: string;
    type: "string";
    value: string;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"file">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "file";
    value: string;
}, {
    name: string;
    type: "file";
    value: string;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"color">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "color";
    value: string;
}, {
    name: string;
    type: "color";
    value: string;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"object">;
    value: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "object";
    value: number;
}, {
    name: string;
    type: "object";
    value: number;
}>]>;
export declare const TiledTileLayerInfinite: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    startx: z.ZodNumber;
    starty: z.ZodNumber;
    chunks: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    }, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    }>, z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        data: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    }, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    }>]>, "many">;
    encoding: z.ZodOptional<z.ZodString>;
    compression: z.ZodOptional<z.ZodString>;
    data: z.ZodUndefined;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    startx: number;
    starty: number;
    chunks: ({
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    } | {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    })[];
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    data?: undefined;
    encoding?: string | undefined;
    compression?: string | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    startx: number;
    starty: number;
    chunks: ({
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    } | {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    })[];
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    data?: undefined;
    encoding?: string | undefined;
    compression?: string | undefined;
}>;
export declare const TiledTileLayer: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    data: z.ZodString;
    encoding: z.ZodLiteral<"base64">;
    compression: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: string;
    encoding: "base64";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    compression?: string | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: string;
    encoding: "base64";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    compression?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    data: z.ZodArray<z.ZodNumber, "many">;
    encoding: z.ZodLiteral<"csv">;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "csv";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "csv";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    data: z.ZodArray<z.ZodNumber, "many">;
    encoding: z.ZodLiteral<"base64">;
    compression: z.ZodLiteral<"gzip">;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "gzip";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "gzip";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    data: z.ZodArray<z.ZodNumber, "many">;
    encoding: z.ZodLiteral<"base64">;
    compression: z.ZodLiteral<"zlib">;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "zlib";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "zlib";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    data: z.ZodArray<z.ZodNumber, "many">;
    encoding: z.ZodLiteral<"base64">;
    compression: z.ZodLiteral<"zstandard">;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "zstandard";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "zstandard";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    startx: z.ZodNumber;
    starty: z.ZodNumber;
    chunks: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    }, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    }>, z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        data: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    }, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    }>]>, "many">;
    encoding: z.ZodOptional<z.ZodString>;
    compression: z.ZodOptional<z.ZodString>;
    data: z.ZodUndefined;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    startx: number;
    starty: number;
    chunks: ({
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    } | {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    })[];
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    data?: undefined;
    encoding?: string | undefined;
    compression?: string | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    startx: number;
    starty: number;
    chunks: ({
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    } | {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    })[];
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    data?: undefined;
    encoding?: string | undefined;
    compression?: string | undefined;
}>]>;
export declare function needsDecoding(x: TiledTileLayer): x is TiledTileLayer & {
    encoding: 'base64';
    data: string;
    compression: string;
};
export declare function isCSV(x: TiledTileLayer): x is TiledTileLayer & {
    encoding: 'csv';
    data: number[];
};
export declare const TiledText: z.ZodObject<{
    text: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
    fontfamily: z.ZodOptional<z.ZodString>;
    pixelsize: z.ZodOptional<z.ZodNumber>;
    wrap: z.ZodOptional<z.ZodBoolean>;
    halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
    valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
}, "strip", z.ZodTypeAny, {
    text: string;
    color?: string | undefined;
    fontfamily?: string | undefined;
    pixelsize?: number | undefined;
    wrap?: boolean | undefined;
    halign?: "left" | "center" | "right" | "justify" | undefined;
    valign?: "center" | "top" | "bottom" | undefined;
}, {
    text: string;
    color?: string | undefined;
    fontfamily?: string | undefined;
    pixelsize?: number | undefined;
    wrap?: boolean | undefined;
    halign?: "left" | "center" | "right" | "justify" | undefined;
    valign?: "center" | "top" | "bottom" | undefined;
}>;
declare const TiledObject: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
    rotation: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    visible: z.ZodOptional<z.ZodBoolean>;
    gid: z.ZodOptional<z.ZodNumber>;
    text: z.ZodOptional<z.ZodObject<{
        text: z.ZodString;
        color: z.ZodOptional<z.ZodString>;
        fontfamily: z.ZodOptional<z.ZodString>;
        pixelsize: z.ZodOptional<z.ZodNumber>;
        wrap: z.ZodOptional<z.ZodBoolean>;
        halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
        valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        color?: string | undefined;
        fontfamily?: string | undefined;
        pixelsize?: number | undefined;
        wrap?: boolean | undefined;
        halign?: "left" | "center" | "right" | "justify" | undefined;
        valign?: "center" | "top" | "bottom" | undefined;
    }, {
        text: string;
        color?: string | undefined;
        fontfamily?: string | undefined;
        pixelsize?: number | undefined;
        wrap?: boolean | undefined;
        halign?: "left" | "center" | "right" | "justify" | undefined;
        valign?: "center" | "top" | "bottom" | undefined;
    }>>;
    point: z.ZodOptional<z.ZodBoolean>;
    ellipse: z.ZodOptional<z.ZodBoolean>;
    polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>, "many">>;
    polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>, "many">>;
    template: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    type?: string | undefined;
    height?: number | undefined;
    width?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    id?: number | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    visible?: boolean | undefined;
    text?: {
        text: string;
        color?: string | undefined;
        fontfamily?: string | undefined;
        pixelsize?: number | undefined;
        wrap?: boolean | undefined;
        halign?: "left" | "center" | "right" | "justify" | undefined;
        valign?: "center" | "top" | "bottom" | undefined;
    } | undefined;
    rotation?: number | undefined;
    gid?: number | undefined;
    point?: boolean | undefined;
    ellipse?: boolean | undefined;
    polyline?: {
        x: number;
        y: number;
    }[] | undefined;
    polygon?: {
        x: number;
        y: number;
    }[] | undefined;
    template?: string | undefined;
}, {
    name?: string | undefined;
    type?: string | undefined;
    height?: number | undefined;
    width?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    id?: number | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    visible?: boolean | undefined;
    text?: {
        text: string;
        color?: string | undefined;
        fontfamily?: string | undefined;
        pixelsize?: number | undefined;
        wrap?: boolean | undefined;
        halign?: "left" | "center" | "right" | "justify" | undefined;
        valign?: "center" | "top" | "bottom" | undefined;
    } | undefined;
    rotation?: number | undefined;
    gid?: number | undefined;
    point?: boolean | undefined;
    ellipse?: boolean | undefined;
    polyline?: {
        x: number;
        y: number;
    }[] | undefined;
    polygon?: {
        x: number;
        y: number;
    }[] | undefined;
    template?: string | undefined;
}>;
declare const TiledObjectLayer: z.ZodObject<{
    name: z.ZodString;
    draworder: z.ZodString;
    type: z.ZodLiteral<"objectgroup">;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    color: z.ZodOptional<z.ZodString>;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    objects: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
        rotation: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        visible: z.ZodOptional<z.ZodBoolean>;
        gid: z.ZodOptional<z.ZodNumber>;
        text: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
            fontfamily: z.ZodOptional<z.ZodString>;
            pixelsize: z.ZodOptional<z.ZodNumber>;
            wrap: z.ZodOptional<z.ZodBoolean>;
            halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
            valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        }, {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        }>>;
        point: z.ZodOptional<z.ZodBoolean>;
        ellipse: z.ZodOptional<z.ZodBoolean>;
        polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        template: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }, {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "objectgroup";
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    draworder: string;
    objects: {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }[];
    color?: string | undefined;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}, {
    name: string;
    type: "objectgroup";
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    draworder: string;
    objects: {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }[];
    color?: string | undefined;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}>;
declare const TiledImageLayer: z.ZodObject<{
    name: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    type: z.ZodLiteral<"imagelayer">;
    class: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    repeatx: z.ZodOptional<z.ZodBoolean>;
    repeaty: z.ZodOptional<z.ZodBoolean>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
    transparentcolor: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "imagelayer";
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    image?: string | undefined;
    repeatx?: boolean | undefined;
    repeaty?: boolean | undefined;
    transparentcolor?: string | undefined;
}, {
    name: string;
    type: "imagelayer";
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    image?: string | undefined;
    repeatx?: boolean | undefined;
    repeaty?: boolean | undefined;
    transparentcolor?: string | undefined;
}>;
declare const TiledLayer: z.ZodUnion<[z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    data: z.ZodString;
    encoding: z.ZodLiteral<"base64">;
    compression: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: string;
    encoding: "base64";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    compression?: string | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: string;
    encoding: "base64";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    compression?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    data: z.ZodArray<z.ZodNumber, "many">;
    encoding: z.ZodLiteral<"csv">;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "csv";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "csv";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    data: z.ZodArray<z.ZodNumber, "many">;
    encoding: z.ZodLiteral<"base64">;
    compression: z.ZodLiteral<"gzip">;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "gzip";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "gzip";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    data: z.ZodArray<z.ZodNumber, "many">;
    encoding: z.ZodLiteral<"base64">;
    compression: z.ZodLiteral<"zlib">;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "zlib";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "zlib";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    data: z.ZodArray<z.ZodNumber, "many">;
    encoding: z.ZodLiteral<"base64">;
    compression: z.ZodLiteral<"zstandard">;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "zstandard";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    data: number[];
    encoding: "base64";
    compression: "zstandard";
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodLiteral<"tilelayer">;
    class: z.ZodOptional<z.ZodString>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
}, {
    startx: z.ZodNumber;
    starty: z.ZodNumber;
    chunks: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    }, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    }>, z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        data: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    }, {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    }>]>, "many">;
    encoding: z.ZodOptional<z.ZodString>;
    compression: z.ZodOptional<z.ZodString>;
    data: z.ZodUndefined;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    startx: number;
    starty: number;
    chunks: ({
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    } | {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    })[];
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    data?: undefined;
    encoding?: string | undefined;
    compression?: string | undefined;
}, {
    name: string;
    type: "tilelayer";
    height: number;
    width: number;
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    startx: number;
    starty: number;
    chunks: ({
        height: number;
        width: number;
        x: number;
        y: number;
        data: string;
    } | {
        height: number;
        width: number;
        x: number;
        y: number;
        data: number[];
    })[];
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    data?: undefined;
    encoding?: string | undefined;
    compression?: string | undefined;
}>]>, z.ZodObject<{
    name: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    type: z.ZodLiteral<"imagelayer">;
    class: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    tintcolor: z.ZodOptional<z.ZodString>;
    repeatx: z.ZodOptional<z.ZodBoolean>;
    repeaty: z.ZodOptional<z.ZodBoolean>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
    transparentcolor: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "imagelayer";
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    image?: string | undefined;
    repeatx?: boolean | undefined;
    repeaty?: boolean | undefined;
    transparentcolor?: string | undefined;
}, {
    name: string;
    type: "imagelayer";
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    image?: string | undefined;
    repeatx?: boolean | undefined;
    repeaty?: boolean | undefined;
    transparentcolor?: string | undefined;
}>, z.ZodObject<{
    name: z.ZodString;
    draworder: z.ZodString;
    type: z.ZodLiteral<"objectgroup">;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodNumber;
    y: z.ZodNumber;
    id: z.ZodNumber;
    color: z.ZodOptional<z.ZodString>;
    tintcolor: z.ZodOptional<z.ZodString>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodNumber;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    visible: z.ZodBoolean;
    objects: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
        rotation: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        visible: z.ZodOptional<z.ZodBoolean>;
        gid: z.ZodOptional<z.ZodNumber>;
        text: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
            fontfamily: z.ZodOptional<z.ZodString>;
            pixelsize: z.ZodOptional<z.ZodNumber>;
            wrap: z.ZodOptional<z.ZodBoolean>;
            halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
            valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        }, {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        }>>;
        point: z.ZodOptional<z.ZodBoolean>;
        ellipse: z.ZodOptional<z.ZodBoolean>;
        polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        template: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }, {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "objectgroup";
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    draworder: string;
    objects: {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }[];
    color?: string | undefined;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}, {
    name: string;
    type: "objectgroup";
    x: number;
    y: number;
    id: number;
    opacity: number;
    visible: boolean;
    draworder: string;
    objects: {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }[];
    color?: string | undefined;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}>]>;
declare const TiledObjectGroup: z.ZodObject<{
    draworder: z.ZodString;
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    opacity: z.ZodNumber;
    tintcolor: z.ZodOptional<z.ZodString>;
    type: z.ZodLiteral<"objectgroup">;
    visible: z.ZodBoolean;
    objects: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
        rotation: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        visible: z.ZodOptional<z.ZodBoolean>;
        gid: z.ZodOptional<z.ZodNumber>;
        text: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
            fontfamily: z.ZodOptional<z.ZodString>;
            pixelsize: z.ZodOptional<z.ZodNumber>;
            wrap: z.ZodOptional<z.ZodBoolean>;
            halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
            valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        }, {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        }>>;
        point: z.ZodOptional<z.ZodBoolean>;
        ellipse: z.ZodOptional<z.ZodBoolean>;
        polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        template: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }, {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }>, "many">;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "objectgroup";
    x: number;
    y: number;
    opacity: number;
    visible: boolean;
    draworder: string;
    objects: {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }[];
    id?: number | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
}, {
    name: string;
    type: "objectgroup";
    x: number;
    y: number;
    opacity: number;
    visible: boolean;
    draworder: string;
    objects: {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }[];
    id?: number | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    tintcolor?: string | undefined;
}>;
export declare const TiledTile: z.ZodObject<{
    id: z.ZodNumber;
    type: z.ZodOptional<z.ZodString>;
    animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
        duration: z.ZodNumber;
        tileid: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        duration: number;
        tileid: number;
    }, {
        duration: number;
        tileid: number;
    }>, "many">>;
    objectgroup: z.ZodOptional<z.ZodObject<{
        draworder: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        opacity: z.ZodNumber;
        tintcolor: z.ZodOptional<z.ZodString>;
        type: z.ZodLiteral<"objectgroup">;
        visible: z.ZodBoolean;
        objects: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
            x: z.ZodOptional<z.ZodNumber>;
            y: z.ZodOptional<z.ZodNumber>;
            rotation: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            width: z.ZodOptional<z.ZodNumber>;
            visible: z.ZodOptional<z.ZodBoolean>;
            gid: z.ZodOptional<z.ZodNumber>;
            text: z.ZodOptional<z.ZodObject<{
                text: z.ZodString;
                color: z.ZodOptional<z.ZodString>;
                fontfamily: z.ZodOptional<z.ZodString>;
                pixelsize: z.ZodOptional<z.ZodNumber>;
                wrap: z.ZodOptional<z.ZodBoolean>;
                halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
                valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            }, {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            }>>;
            point: z.ZodOptional<z.ZodBoolean>;
            ellipse: z.ZodOptional<z.ZodBoolean>;
            polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>, "many">>;
            polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>, "many">>;
            template: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"int">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "int";
                value: number;
            }, {
                name: string;
                type: "int";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "bool";
                value: boolean;
            }, {
                name: string;
                type: "bool";
                value: boolean;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "float";
                value: number;
            }, {
                name: string;
                type: "float";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"string">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "string";
                value: string;
            }, {
                name: string;
                type: "string";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"file">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "file";
                value: string;
            }, {
                name: string;
                type: "file";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"color">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "color";
                value: string;
            }, {
                name: string;
                type: "color";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"object">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "object";
                value: number;
            }, {
                name: string;
                type: "object";
                value: number;
            }>]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }, {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }>, "many">;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "objectgroup";
        x: number;
        y: number;
        opacity: number;
        visible: boolean;
        draworder: string;
        objects: {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }[];
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
    }, {
        name: string;
        type: "objectgroup";
        x: number;
        y: number;
        opacity: number;
        visible: boolean;
        draworder: string;
        objects: {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }[];
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
    }>>;
    probability: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
    image: z.ZodOptional<z.ZodString>;
    imageheight: z.ZodOptional<z.ZodNumber>;
    imagewidth: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: number;
    type?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    objectgroup?: {
        name: string;
        type: "objectgroup";
        x: number;
        y: number;
        opacity: number;
        visible: boolean;
        draworder: string;
        objects: {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }[];
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
    } | undefined;
    image?: string | undefined;
    animation?: {
        duration: number;
        tileid: number;
    }[] | undefined;
    probability?: number | undefined;
    imageheight?: number | undefined;
    imagewidth?: number | undefined;
}, {
    id: number;
    type?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    objectgroup?: {
        name: string;
        type: "objectgroup";
        x: number;
        y: number;
        opacity: number;
        visible: boolean;
        draworder: string;
        objects: {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }[];
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
    } | undefined;
    image?: string | undefined;
    animation?: {
        duration: number;
        tileid: number;
    }[] | undefined;
    probability?: number | undefined;
    imageheight?: number | undefined;
    imagewidth?: number | undefined;
}>;
declare const TiledTilesetEmbedded: z.ZodObject<{
    name: z.ZodString;
    firstgid: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    objectalignment: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"topleft">, z.ZodLiteral<"top">, z.ZodLiteral<"topright">, z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"bottomleft">, z.ZodLiteral<"bottom">, z.ZodLiteral<"bottomright">]>>;
    image: z.ZodOptional<z.ZodString>;
    imagewidth: z.ZodOptional<z.ZodNumber>;
    imageheight: z.ZodOptional<z.ZodNumber>;
    columns: z.ZodNumber;
    tileheight: z.ZodNumber;
    tilewidth: z.ZodNumber;
    tilecount: z.ZodNumber;
    grid: z.ZodOptional<z.ZodObject<{
        height: z.ZodNumber;
        width: z.ZodNumber;
        orientation: z.ZodUnion<[z.ZodLiteral<"isometric">, z.ZodLiteral<"orthogonal">]>;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    }, {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    }>>;
    tileoffset: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
    spacing: z.ZodNumber;
    margin: z.ZodNumber;
    tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        type: z.ZodOptional<z.ZodString>;
        animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
            duration: z.ZodNumber;
            tileid: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            duration: number;
            tileid: number;
        }, {
            duration: number;
            tileid: number;
        }>, "many">>;
        objectgroup: z.ZodOptional<z.ZodObject<{
            draworder: z.ZodString;
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodString;
            x: z.ZodNumber;
            y: z.ZodNumber;
            opacity: z.ZodNumber;
            tintcolor: z.ZodOptional<z.ZodString>;
            type: z.ZodLiteral<"objectgroup">;
            visible: z.ZodBoolean;
            objects: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                name: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodString>;
                x: z.ZodOptional<z.ZodNumber>;
                y: z.ZodOptional<z.ZodNumber>;
                rotation: z.ZodOptional<z.ZodNumber>;
                height: z.ZodOptional<z.ZodNumber>;
                width: z.ZodOptional<z.ZodNumber>;
                visible: z.ZodOptional<z.ZodBoolean>;
                gid: z.ZodOptional<z.ZodNumber>;
                text: z.ZodOptional<z.ZodObject<{
                    text: z.ZodString;
                    color: z.ZodOptional<z.ZodString>;
                    fontfamily: z.ZodOptional<z.ZodString>;
                    pixelsize: z.ZodOptional<z.ZodNumber>;
                    wrap: z.ZodOptional<z.ZodBoolean>;
                    halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
                    valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                }, {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                }>>;
                point: z.ZodOptional<z.ZodBoolean>;
                ellipse: z.ZodOptional<z.ZodBoolean>;
                polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>, "many">>;
                polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>, "many">>;
                template: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"int">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "int";
                    value: number;
                }, {
                    name: string;
                    type: "int";
                    value: number;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "bool";
                    value: boolean;
                }, {
                    name: string;
                    type: "bool";
                    value: boolean;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "float";
                    value: number;
                }, {
                    name: string;
                    type: "float";
                    value: number;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"string">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "string";
                    value: string;
                }, {
                    name: string;
                    type: "string";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"file">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "file";
                    value: string;
                }, {
                    name: string;
                    type: "file";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"color">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "color";
                    value: string;
                }, {
                    name: string;
                    type: "color";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"object">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "object";
                    value: number;
                }, {
                    name: string;
                    type: "object";
                    value: number;
                }>]>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }, {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }>, "many">;
            properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"int">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "int";
                value: number;
            }, {
                name: string;
                type: "int";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "bool";
                value: boolean;
            }, {
                name: string;
                type: "bool";
                value: boolean;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "float";
                value: number;
            }, {
                name: string;
                type: "float";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"string">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "string";
                value: string;
            }, {
                name: string;
                type: "string";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"file">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "file";
                value: string;
            }, {
                name: string;
                type: "file";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"color">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "color";
                value: string;
            }, {
                name: string;
                type: "color";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"object">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "object";
                value: number;
            }, {
                name: string;
                type: "object";
                value: number;
            }>]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        }, {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        }>>;
        probability: z.ZodOptional<z.ZodNumber>;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        image: z.ZodOptional<z.ZodString>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }, {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }>, "many">>;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    columns: number;
    tileheight: number;
    tilewidth: number;
    tilecount: number;
    spacing: number;
    margin: number;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    image?: string | undefined;
    imageheight?: number | undefined;
    imagewidth?: number | undefined;
    firstgid?: number | undefined;
    objectalignment?: "left" | "center" | "right" | "top" | "bottom" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
    grid?: {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    } | undefined;
    tileoffset?: {
        x: number;
        y: number;
    } | undefined;
    tiles?: {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }[] | undefined;
}, {
    name: string;
    columns: number;
    tileheight: number;
    tilewidth: number;
    tilecount: number;
    spacing: number;
    margin: number;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    image?: string | undefined;
    imageheight?: number | undefined;
    imagewidth?: number | undefined;
    firstgid?: number | undefined;
    objectalignment?: "left" | "center" | "right" | "top" | "bottom" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
    grid?: {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    } | undefined;
    tileoffset?: {
        x: number;
        y: number;
    } | undefined;
    tiles?: {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }[] | undefined;
}>;
export declare function isTiledTilesetSingleImage(x: TiledTileset): x is TiledTilesetEmbedded & {
    image: string;
    imagewidth: number;
    imageheight: number;
};
export declare function isTiledTilesetCollectionOfImages(x: TiledTileset): x is Omit<TiledTilesetEmbedded, 'image' | 'imagewidth' | 'imageheight'>;
export declare const TiledTilesetFile: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    firstgid: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    objectalignment: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"topleft">, z.ZodLiteral<"top">, z.ZodLiteral<"topright">, z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"bottomleft">, z.ZodLiteral<"bottom">, z.ZodLiteral<"bottomright">]>>;
    image: z.ZodOptional<z.ZodString>;
    imagewidth: z.ZodOptional<z.ZodNumber>;
    imageheight: z.ZodOptional<z.ZodNumber>;
    columns: z.ZodNumber;
    tileheight: z.ZodNumber;
    tilewidth: z.ZodNumber;
    tilecount: z.ZodNumber;
    grid: z.ZodOptional<z.ZodObject<{
        height: z.ZodNumber;
        width: z.ZodNumber;
        orientation: z.ZodUnion<[z.ZodLiteral<"isometric">, z.ZodLiteral<"orthogonal">]>;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    }, {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    }>>;
    tileoffset: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
    spacing: z.ZodNumber;
    margin: z.ZodNumber;
    tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        type: z.ZodOptional<z.ZodString>;
        animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
            duration: z.ZodNumber;
            tileid: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            duration: number;
            tileid: number;
        }, {
            duration: number;
            tileid: number;
        }>, "many">>;
        objectgroup: z.ZodOptional<z.ZodObject<{
            draworder: z.ZodString;
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodString;
            x: z.ZodNumber;
            y: z.ZodNumber;
            opacity: z.ZodNumber;
            tintcolor: z.ZodOptional<z.ZodString>;
            type: z.ZodLiteral<"objectgroup">;
            visible: z.ZodBoolean;
            objects: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                name: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodString>;
                x: z.ZodOptional<z.ZodNumber>;
                y: z.ZodOptional<z.ZodNumber>;
                rotation: z.ZodOptional<z.ZodNumber>;
                height: z.ZodOptional<z.ZodNumber>;
                width: z.ZodOptional<z.ZodNumber>;
                visible: z.ZodOptional<z.ZodBoolean>;
                gid: z.ZodOptional<z.ZodNumber>;
                text: z.ZodOptional<z.ZodObject<{
                    text: z.ZodString;
                    color: z.ZodOptional<z.ZodString>;
                    fontfamily: z.ZodOptional<z.ZodString>;
                    pixelsize: z.ZodOptional<z.ZodNumber>;
                    wrap: z.ZodOptional<z.ZodBoolean>;
                    halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
                    valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                }, {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                }>>;
                point: z.ZodOptional<z.ZodBoolean>;
                ellipse: z.ZodOptional<z.ZodBoolean>;
                polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>, "many">>;
                polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>, "many">>;
                template: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"int">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "int";
                    value: number;
                }, {
                    name: string;
                    type: "int";
                    value: number;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "bool";
                    value: boolean;
                }, {
                    name: string;
                    type: "bool";
                    value: boolean;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "float";
                    value: number;
                }, {
                    name: string;
                    type: "float";
                    value: number;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"string">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "string";
                    value: string;
                }, {
                    name: string;
                    type: "string";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"file">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "file";
                    value: string;
                }, {
                    name: string;
                    type: "file";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"color">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "color";
                    value: string;
                }, {
                    name: string;
                    type: "color";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"object">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "object";
                    value: number;
                }, {
                    name: string;
                    type: "object";
                    value: number;
                }>]>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }, {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }>, "many">;
            properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"int">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "int";
                value: number;
            }, {
                name: string;
                type: "int";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "bool";
                value: boolean;
            }, {
                name: string;
                type: "bool";
                value: boolean;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "float";
                value: number;
            }, {
                name: string;
                type: "float";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"string">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "string";
                value: string;
            }, {
                name: string;
                type: "string";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"file">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "file";
                value: string;
            }, {
                name: string;
                type: "file";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"color">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "color";
                value: string;
            }, {
                name: string;
                type: "color";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"object">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "object";
                value: number;
            }, {
                name: string;
                type: "object";
                value: number;
            }>]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        }, {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        }>>;
        probability: z.ZodOptional<z.ZodNumber>;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        image: z.ZodOptional<z.ZodString>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }, {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }>, "many">>;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
}, {
    tiledversion: z.ZodOptional<z.ZodString>;
    type: z.ZodLiteral<"tileset">;
    version: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: "tileset";
    columns: number;
    tileheight: number;
    tilewidth: number;
    tilecount: number;
    spacing: number;
    margin: number;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    image?: string | undefined;
    imageheight?: number | undefined;
    imagewidth?: number | undefined;
    firstgid?: number | undefined;
    objectalignment?: "left" | "center" | "right" | "top" | "bottom" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
    grid?: {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    } | undefined;
    tileoffset?: {
        x: number;
        y: number;
    } | undefined;
    tiles?: {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }[] | undefined;
    tiledversion?: string | undefined;
    version?: string | undefined;
}, {
    name: string;
    type: "tileset";
    columns: number;
    tileheight: number;
    tilewidth: number;
    tilecount: number;
    spacing: number;
    margin: number;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    image?: string | undefined;
    imageheight?: number | undefined;
    imagewidth?: number | undefined;
    firstgid?: number | undefined;
    objectalignment?: "left" | "center" | "right" | "top" | "bottom" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
    grid?: {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    } | undefined;
    tileoffset?: {
        x: number;
        y: number;
    } | undefined;
    tiles?: {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }[] | undefined;
    tiledversion?: string | undefined;
    version?: string | undefined;
}>;
declare const TiledTilesetExternal: z.ZodObject<{
    firstgid: z.ZodNumber;
    source: z.ZodString;
}, "strip", z.ZodTypeAny, {
    firstgid: number;
    source: string;
}, {
    firstgid: number;
    source: string;
}>;
export declare const TiledTileset: z.ZodUnion<[z.ZodObject<{
    name: z.ZodString;
    firstgid: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    objectalignment: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"topleft">, z.ZodLiteral<"top">, z.ZodLiteral<"topright">, z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"bottomleft">, z.ZodLiteral<"bottom">, z.ZodLiteral<"bottomright">]>>;
    image: z.ZodOptional<z.ZodString>;
    imagewidth: z.ZodOptional<z.ZodNumber>;
    imageheight: z.ZodOptional<z.ZodNumber>;
    columns: z.ZodNumber;
    tileheight: z.ZodNumber;
    tilewidth: z.ZodNumber;
    tilecount: z.ZodNumber;
    grid: z.ZodOptional<z.ZodObject<{
        height: z.ZodNumber;
        width: z.ZodNumber;
        orientation: z.ZodUnion<[z.ZodLiteral<"isometric">, z.ZodLiteral<"orthogonal">]>;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    }, {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    }>>;
    tileoffset: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
    spacing: z.ZodNumber;
    margin: z.ZodNumber;
    tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        type: z.ZodOptional<z.ZodString>;
        animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
            duration: z.ZodNumber;
            tileid: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            duration: number;
            tileid: number;
        }, {
            duration: number;
            tileid: number;
        }>, "many">>;
        objectgroup: z.ZodOptional<z.ZodObject<{
            draworder: z.ZodString;
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodString;
            x: z.ZodNumber;
            y: z.ZodNumber;
            opacity: z.ZodNumber;
            tintcolor: z.ZodOptional<z.ZodString>;
            type: z.ZodLiteral<"objectgroup">;
            visible: z.ZodBoolean;
            objects: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                name: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodString>;
                x: z.ZodOptional<z.ZodNumber>;
                y: z.ZodOptional<z.ZodNumber>;
                rotation: z.ZodOptional<z.ZodNumber>;
                height: z.ZodOptional<z.ZodNumber>;
                width: z.ZodOptional<z.ZodNumber>;
                visible: z.ZodOptional<z.ZodBoolean>;
                gid: z.ZodOptional<z.ZodNumber>;
                text: z.ZodOptional<z.ZodObject<{
                    text: z.ZodString;
                    color: z.ZodOptional<z.ZodString>;
                    fontfamily: z.ZodOptional<z.ZodString>;
                    pixelsize: z.ZodOptional<z.ZodNumber>;
                    wrap: z.ZodOptional<z.ZodBoolean>;
                    halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
                    valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                }, {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                }>>;
                point: z.ZodOptional<z.ZodBoolean>;
                ellipse: z.ZodOptional<z.ZodBoolean>;
                polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>, "many">>;
                polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>, "many">>;
                template: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"int">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "int";
                    value: number;
                }, {
                    name: string;
                    type: "int";
                    value: number;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "bool";
                    value: boolean;
                }, {
                    name: string;
                    type: "bool";
                    value: boolean;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "float";
                    value: number;
                }, {
                    name: string;
                    type: "float";
                    value: number;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"string">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "string";
                    value: string;
                }, {
                    name: string;
                    type: "string";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"file">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "file";
                    value: string;
                }, {
                    name: string;
                    type: "file";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"color">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "color";
                    value: string;
                }, {
                    name: string;
                    type: "color";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"object">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "object";
                    value: number;
                }, {
                    name: string;
                    type: "object";
                    value: number;
                }>]>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }, {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }>, "many">;
            properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"int">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "int";
                value: number;
            }, {
                name: string;
                type: "int";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "bool";
                value: boolean;
            }, {
                name: string;
                type: "bool";
                value: boolean;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "float";
                value: number;
            }, {
                name: string;
                type: "float";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"string">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "string";
                value: string;
            }, {
                name: string;
                type: "string";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"file">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "file";
                value: string;
            }, {
                name: string;
                type: "file";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"color">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "color";
                value: string;
            }, {
                name: string;
                type: "color";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"object">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "object";
                value: number;
            }, {
                name: string;
                type: "object";
                value: number;
            }>]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        }, {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        }>>;
        probability: z.ZodOptional<z.ZodNumber>;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        image: z.ZodOptional<z.ZodString>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }, {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }>, "many">>;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    columns: number;
    tileheight: number;
    tilewidth: number;
    tilecount: number;
    spacing: number;
    margin: number;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    image?: string | undefined;
    imageheight?: number | undefined;
    imagewidth?: number | undefined;
    firstgid?: number | undefined;
    objectalignment?: "left" | "center" | "right" | "top" | "bottom" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
    grid?: {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    } | undefined;
    tileoffset?: {
        x: number;
        y: number;
    } | undefined;
    tiles?: {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }[] | undefined;
}, {
    name: string;
    columns: number;
    tileheight: number;
    tilewidth: number;
    tilecount: number;
    spacing: number;
    margin: number;
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    image?: string | undefined;
    imageheight?: number | undefined;
    imagewidth?: number | undefined;
    firstgid?: number | undefined;
    objectalignment?: "left" | "center" | "right" | "top" | "bottom" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
    grid?: {
        height: number;
        width: number;
        orientation: "isometric" | "orthogonal";
    } | undefined;
    tileoffset?: {
        x: number;
        y: number;
    } | undefined;
    tiles?: {
        id: number;
        type?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        objectgroup?: {
            name: string;
            type: "objectgroup";
            x: number;
            y: number;
            opacity: number;
            visible: boolean;
            draworder: string;
            objects: {
                name?: string | undefined;
                type?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
                x?: number | undefined;
                y?: number | undefined;
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                visible?: boolean | undefined;
                text?: {
                    text: string;
                    color?: string | undefined;
                    fontfamily?: string | undefined;
                    pixelsize?: number | undefined;
                    wrap?: boolean | undefined;
                    halign?: "left" | "center" | "right" | "justify" | undefined;
                    valign?: "center" | "top" | "bottom" | undefined;
                } | undefined;
                rotation?: number | undefined;
                gid?: number | undefined;
                point?: boolean | undefined;
                ellipse?: boolean | undefined;
                polyline?: {
                    x: number;
                    y: number;
                }[] | undefined;
                polygon?: {
                    x: number;
                    y: number;
                }[] | undefined;
                template?: string | undefined;
            }[];
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            tintcolor?: string | undefined;
        } | undefined;
        image?: string | undefined;
        animation?: {
            duration: number;
            tileid: number;
        }[] | undefined;
        probability?: number | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
    }[] | undefined;
}>, z.ZodObject<{
    firstgid: z.ZodNumber;
    source: z.ZodString;
}, "strip", z.ZodTypeAny, {
    firstgid: number;
    source: string;
}, {
    firstgid: number;
    source: string;
}>]>;
export declare const TiledTemplate: z.ZodObject<{
    object: z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
        rotation: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        visible: z.ZodOptional<z.ZodBoolean>;
        gid: z.ZodOptional<z.ZodNumber>;
        text: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
            fontfamily: z.ZodOptional<z.ZodString>;
            pixelsize: z.ZodOptional<z.ZodNumber>;
            wrap: z.ZodOptional<z.ZodBoolean>;
            halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
            valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        }, {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        }>>;
        point: z.ZodOptional<z.ZodBoolean>;
        ellipse: z.ZodOptional<z.ZodBoolean>;
        polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        template: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
    }, {
        id: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }, {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    }>;
    tileset: z.ZodOptional<z.ZodObject<{
        firstgid: z.ZodNumber;
        source: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstgid: number;
        source: string;
    }, {
        firstgid: number;
        source: string;
    }>>;
    type: z.ZodLiteral<"template">;
}, "strip", z.ZodTypeAny, {
    object: {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    };
    type: "template";
    tileset?: {
        firstgid: number;
        source: string;
    } | undefined;
}, {
    object: {
        name?: string | undefined;
        type?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        id?: number | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        visible?: boolean | undefined;
        text?: {
            text: string;
            color?: string | undefined;
            fontfamily?: string | undefined;
            pixelsize?: number | undefined;
            wrap?: boolean | undefined;
            halign?: "left" | "center" | "right" | "justify" | undefined;
            valign?: "center" | "top" | "bottom" | undefined;
        } | undefined;
        rotation?: number | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        ellipse?: boolean | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        template?: string | undefined;
    };
    type: "template";
    tileset?: {
        firstgid: number;
        source: string;
    } | undefined;
}>;
export declare const TiledMap: z.ZodObject<{
    type: z.ZodString;
    class: z.ZodOptional<z.ZodString>;
    tiledversion: z.ZodString;
    version: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    tilewidth: z.ZodNumber;
    tileheight: z.ZodNumber;
    compressionlevel: z.ZodOptional<z.ZodNumber>;
    infinite: z.ZodBoolean;
    nextlayerid: z.ZodNumber;
    nextobjectid: z.ZodNumber;
    parallaxoriginx: z.ZodOptional<z.ZodNumber>;
    parallaxoriginy: z.ZodOptional<z.ZodNumber>;
    hexsidelength: z.ZodOptional<z.ZodNumber>;
    staggeraxis: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"y">, z.ZodLiteral<"x">]>>;
    staggerindex: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"odd">, z.ZodLiteral<"even">]>>;
    orientation: z.ZodUnion<[z.ZodLiteral<"isometric">, z.ZodLiteral<"orthogonal">, z.ZodLiteral<"staggered">, z.ZodLiteral<"hexagonal">]>;
    renderorder: z.ZodUnion<[z.ZodLiteral<"right-down">, z.ZodLiteral<"right-up">, z.ZodLiteral<"left-down">, z.ZodLiteral<"left-up">]>;
    backgroundcolor: z.ZodOptional<z.ZodString>;
    layers: z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        type: z.ZodLiteral<"tilelayer">;
        class: z.ZodOptional<z.ZodString>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
        id: z.ZodNumber;
        opacity: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        visible: z.ZodBoolean;
        tintcolor: z.ZodOptional<z.ZodString>;
        parallaxx: z.ZodOptional<z.ZodNumber>;
        parallaxy: z.ZodOptional<z.ZodNumber>;
        offsetx: z.ZodOptional<z.ZodNumber>;
        offsety: z.ZodOptional<z.ZodNumber>;
    }, {
        data: z.ZodString;
        encoding: z.ZodLiteral<"base64">;
        compression: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: string;
        encoding: "base64";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        compression?: string | undefined;
    }, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: string;
        encoding: "base64";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        compression?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        type: z.ZodLiteral<"tilelayer">;
        class: z.ZodOptional<z.ZodString>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
        id: z.ZodNumber;
        opacity: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        visible: z.ZodBoolean;
        tintcolor: z.ZodOptional<z.ZodString>;
        parallaxx: z.ZodOptional<z.ZodNumber>;
        parallaxy: z.ZodOptional<z.ZodNumber>;
        offsetx: z.ZodOptional<z.ZodNumber>;
        offsety: z.ZodOptional<z.ZodNumber>;
    }, {
        data: z.ZodArray<z.ZodNumber, "many">;
        encoding: z.ZodLiteral<"csv">;
    }>, "strip", z.ZodTypeAny, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "csv";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    }, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "csv";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        type: z.ZodLiteral<"tilelayer">;
        class: z.ZodOptional<z.ZodString>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
        id: z.ZodNumber;
        opacity: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        visible: z.ZodBoolean;
        tintcolor: z.ZodOptional<z.ZodString>;
        parallaxx: z.ZodOptional<z.ZodNumber>;
        parallaxy: z.ZodOptional<z.ZodNumber>;
        offsetx: z.ZodOptional<z.ZodNumber>;
        offsety: z.ZodOptional<z.ZodNumber>;
    }, {
        data: z.ZodArray<z.ZodNumber, "many">;
        encoding: z.ZodLiteral<"base64">;
        compression: z.ZodLiteral<"gzip">;
    }>, "strip", z.ZodTypeAny, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "gzip";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    }, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "gzip";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        type: z.ZodLiteral<"tilelayer">;
        class: z.ZodOptional<z.ZodString>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
        id: z.ZodNumber;
        opacity: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        visible: z.ZodBoolean;
        tintcolor: z.ZodOptional<z.ZodString>;
        parallaxx: z.ZodOptional<z.ZodNumber>;
        parallaxy: z.ZodOptional<z.ZodNumber>;
        offsetx: z.ZodOptional<z.ZodNumber>;
        offsety: z.ZodOptional<z.ZodNumber>;
    }, {
        data: z.ZodArray<z.ZodNumber, "many">;
        encoding: z.ZodLiteral<"base64">;
        compression: z.ZodLiteral<"zlib">;
    }>, "strip", z.ZodTypeAny, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "zlib";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    }, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "zlib";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        type: z.ZodLiteral<"tilelayer">;
        class: z.ZodOptional<z.ZodString>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
        id: z.ZodNumber;
        opacity: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        visible: z.ZodBoolean;
        tintcolor: z.ZodOptional<z.ZodString>;
        parallaxx: z.ZodOptional<z.ZodNumber>;
        parallaxy: z.ZodOptional<z.ZodNumber>;
        offsetx: z.ZodOptional<z.ZodNumber>;
        offsety: z.ZodOptional<z.ZodNumber>;
    }, {
        data: z.ZodArray<z.ZodNumber, "many">;
        encoding: z.ZodLiteral<"base64">;
        compression: z.ZodLiteral<"zstandard">;
    }>, "strip", z.ZodTypeAny, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "zstandard";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    }, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "zstandard";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        type: z.ZodLiteral<"tilelayer">;
        class: z.ZodOptional<z.ZodString>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
        id: z.ZodNumber;
        opacity: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        visible: z.ZodBoolean;
        tintcolor: z.ZodOptional<z.ZodString>;
        parallaxx: z.ZodOptional<z.ZodNumber>;
        parallaxy: z.ZodOptional<z.ZodNumber>;
        offsetx: z.ZodOptional<z.ZodNumber>;
        offsety: z.ZodOptional<z.ZodNumber>;
    }, {
        startx: z.ZodNumber;
        starty: z.ZodNumber;
        chunks: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            data: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            height: number;
            width: number;
            x: number;
            y: number;
            data: string;
        }, {
            height: number;
            width: number;
            x: number;
            y: number;
            data: string;
        }>, z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            data: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            height: number;
            width: number;
            x: number;
            y: number;
            data: number[];
        }, {
            height: number;
            width: number;
            x: number;
            y: number;
            data: number[];
        }>]>, "many">;
        encoding: z.ZodOptional<z.ZodString>;
        compression: z.ZodOptional<z.ZodString>;
        data: z.ZodUndefined;
    }>, "strip", z.ZodTypeAny, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        startx: number;
        starty: number;
        chunks: ({
            height: number;
            width: number;
            x: number;
            y: number;
            data: string;
        } | {
            height: number;
            width: number;
            x: number;
            y: number;
            data: number[];
        })[];
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        data?: undefined;
        encoding?: string | undefined;
        compression?: string | undefined;
    }, {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        startx: number;
        starty: number;
        chunks: ({
            height: number;
            width: number;
            x: number;
            y: number;
            data: string;
        } | {
            height: number;
            width: number;
            x: number;
            y: number;
            data: number[];
        })[];
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        data?: undefined;
        encoding?: string | undefined;
        compression?: string | undefined;
    }>]>, z.ZodObject<{
        name: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        id: z.ZodNumber;
        type: z.ZodLiteral<"imagelayer">;
        class: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        opacity: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        visible: z.ZodBoolean;
        tintcolor: z.ZodOptional<z.ZodString>;
        repeatx: z.ZodOptional<z.ZodBoolean>;
        repeaty: z.ZodOptional<z.ZodBoolean>;
        parallaxx: z.ZodOptional<z.ZodNumber>;
        parallaxy: z.ZodOptional<z.ZodNumber>;
        offsetx: z.ZodOptional<z.ZodNumber>;
        offsety: z.ZodOptional<z.ZodNumber>;
        transparentcolor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "imagelayer";
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        image?: string | undefined;
        repeatx?: boolean | undefined;
        repeaty?: boolean | undefined;
        transparentcolor?: string | undefined;
    }, {
        name: string;
        type: "imagelayer";
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        image?: string | undefined;
        repeatx?: boolean | undefined;
        repeaty?: boolean | undefined;
        transparentcolor?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        draworder: z.ZodString;
        type: z.ZodLiteral<"objectgroup">;
        class: z.ZodOptional<z.ZodString>;
        x: z.ZodNumber;
        y: z.ZodNumber;
        id: z.ZodNumber;
        color: z.ZodOptional<z.ZodString>;
        tintcolor: z.ZodOptional<z.ZodString>;
        parallaxx: z.ZodOptional<z.ZodNumber>;
        parallaxy: z.ZodOptional<z.ZodNumber>;
        offsetx: z.ZodOptional<z.ZodNumber>;
        offsety: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
        visible: z.ZodBoolean;
        objects: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
            x: z.ZodOptional<z.ZodNumber>;
            y: z.ZodOptional<z.ZodNumber>;
            rotation: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            width: z.ZodOptional<z.ZodNumber>;
            visible: z.ZodOptional<z.ZodBoolean>;
            gid: z.ZodOptional<z.ZodNumber>;
            text: z.ZodOptional<z.ZodObject<{
                text: z.ZodString;
                color: z.ZodOptional<z.ZodString>;
                fontfamily: z.ZodOptional<z.ZodString>;
                pixelsize: z.ZodOptional<z.ZodNumber>;
                wrap: z.ZodOptional<z.ZodBoolean>;
                halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
                valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            }, {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            }>>;
            point: z.ZodOptional<z.ZodBoolean>;
            ellipse: z.ZodOptional<z.ZodBoolean>;
            polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>, "many">>;
            polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>, "many">>;
            template: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"int">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "int";
                value: number;
            }, {
                name: string;
                type: "int";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "bool";
                value: boolean;
            }, {
                name: string;
                type: "bool";
                value: boolean;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "float";
                value: number;
            }, {
                name: string;
                type: "float";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"string">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "string";
                value: string;
            }, {
                name: string;
                type: "string";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"file">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "file";
                value: string;
            }, {
                name: string;
                type: "file";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"color">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "color";
                value: string;
            }, {
                name: string;
                type: "color";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"object">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "object";
                value: number;
            }, {
                name: string;
                type: "object";
                value: number;
            }>]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }, {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "objectgroup";
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        draworder: string;
        objects: {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }[];
        color?: string | undefined;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    }, {
        name: string;
        type: "objectgroup";
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        draworder: string;
        objects: {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }[];
        color?: string | undefined;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    }>]>, "many">;
    tilesets: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        firstgid: z.ZodOptional<z.ZodNumber>;
        class: z.ZodOptional<z.ZodString>;
        objectalignment: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"topleft">, z.ZodLiteral<"top">, z.ZodLiteral<"topright">, z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"bottomleft">, z.ZodLiteral<"bottom">, z.ZodLiteral<"bottomright">]>>;
        image: z.ZodOptional<z.ZodString>;
        imagewidth: z.ZodOptional<z.ZodNumber>;
        imageheight: z.ZodOptional<z.ZodNumber>;
        columns: z.ZodNumber;
        tileheight: z.ZodNumber;
        tilewidth: z.ZodNumber;
        tilecount: z.ZodNumber;
        grid: z.ZodOptional<z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            orientation: z.ZodUnion<[z.ZodLiteral<"isometric">, z.ZodLiteral<"orthogonal">]>;
        }, "strip", z.ZodTypeAny, {
            height: number;
            width: number;
            orientation: "isometric" | "orthogonal";
        }, {
            height: number;
            width: number;
            orientation: "isometric" | "orthogonal";
        }>>;
        tileoffset: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
        spacing: z.ZodNumber;
        margin: z.ZodNumber;
        tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            type: z.ZodOptional<z.ZodString>;
            animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                duration: z.ZodNumber;
                tileid: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                tileid: number;
            }, {
                duration: number;
                tileid: number;
            }>, "many">>;
            objectgroup: z.ZodOptional<z.ZodObject<{
                draworder: z.ZodString;
                id: z.ZodOptional<z.ZodNumber>;
                name: z.ZodString;
                x: z.ZodNumber;
                y: z.ZodNumber;
                opacity: z.ZodNumber;
                tintcolor: z.ZodOptional<z.ZodString>;
                type: z.ZodLiteral<"objectgroup">;
                visible: z.ZodBoolean;
                objects: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodNumber>;
                    name: z.ZodOptional<z.ZodString>;
                    type: z.ZodOptional<z.ZodString>;
                    x: z.ZodOptional<z.ZodNumber>;
                    y: z.ZodOptional<z.ZodNumber>;
                    rotation: z.ZodOptional<z.ZodNumber>;
                    height: z.ZodOptional<z.ZodNumber>;
                    width: z.ZodOptional<z.ZodNumber>;
                    visible: z.ZodOptional<z.ZodBoolean>;
                    gid: z.ZodOptional<z.ZodNumber>;
                    text: z.ZodOptional<z.ZodObject<{
                        text: z.ZodString;
                        color: z.ZodOptional<z.ZodString>;
                        fontfamily: z.ZodOptional<z.ZodString>;
                        pixelsize: z.ZodOptional<z.ZodNumber>;
                        wrap: z.ZodOptional<z.ZodBoolean>;
                        halign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"center">, z.ZodLiteral<"right">, z.ZodLiteral<"justify">]>>;
                        valign: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"top">, z.ZodLiteral<"center">, z.ZodLiteral<"bottom">]>>;
                    }, "strip", z.ZodTypeAny, {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    }, {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    }>>;
                    point: z.ZodOptional<z.ZodBoolean>;
                    ellipse: z.ZodOptional<z.ZodBoolean>;
                    polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        x: number;
                        y: number;
                    }, {
                        x: number;
                        y: number;
                    }>, "many">>;
                    polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        x: number;
                        y: number;
                    }, {
                        x: number;
                        y: number;
                    }>, "many">>;
                    template: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"int">;
                        value: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        type: "int";
                        value: number;
                    }, {
                        name: string;
                        type: "int";
                        value: number;
                    }>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"bool">;
                        value: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        type: "bool";
                        value: boolean;
                    }, {
                        name: string;
                        type: "bool";
                        value: boolean;
                    }>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"float">;
                        value: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        type: "float";
                        value: number;
                    }, {
                        name: string;
                        type: "float";
                        value: number;
                    }>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"string">;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        type: "string";
                        value: string;
                    }, {
                        name: string;
                        type: "string";
                        value: string;
                    }>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"file">;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        type: "file";
                        value: string;
                    }, {
                        name: string;
                        type: "file";
                        value: string;
                    }>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"color">;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        type: "color";
                        value: string;
                    }, {
                        name: string;
                        type: "color";
                        value: string;
                    }>, z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodLiteral<"object">;
                        value: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        type: "object";
                        value: number;
                    }, {
                        name: string;
                        type: "object";
                        value: number;
                    }>]>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name?: string | undefined;
                    type?: string | undefined;
                    height?: number | undefined;
                    width?: number | undefined;
                    x?: number | undefined;
                    y?: number | undefined;
                    id?: number | undefined;
                    properties?: ({
                        name: string;
                        type: "int";
                        value: number;
                    } | {
                        name: string;
                        type: "bool";
                        value: boolean;
                    } | {
                        name: string;
                        type: "float";
                        value: number;
                    } | {
                        name: string;
                        type: "string";
                        value: string;
                    } | {
                        name: string;
                        type: "file";
                        value: string;
                    } | {
                        name: string;
                        type: "color";
                        value: string;
                    } | {
                        name: string;
                        type: "object";
                        value: number;
                    })[] | undefined;
                    visible?: boolean | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    } | undefined;
                    rotation?: number | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    ellipse?: boolean | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    template?: string | undefined;
                }, {
                    name?: string | undefined;
                    type?: string | undefined;
                    height?: number | undefined;
                    width?: number | undefined;
                    x?: number | undefined;
                    y?: number | undefined;
                    id?: number | undefined;
                    properties?: ({
                        name: string;
                        type: "int";
                        value: number;
                    } | {
                        name: string;
                        type: "bool";
                        value: boolean;
                    } | {
                        name: string;
                        type: "float";
                        value: number;
                    } | {
                        name: string;
                        type: "string";
                        value: string;
                    } | {
                        name: string;
                        type: "file";
                        value: string;
                    } | {
                        name: string;
                        type: "color";
                        value: string;
                    } | {
                        name: string;
                        type: "object";
                        value: number;
                    })[] | undefined;
                    visible?: boolean | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    } | undefined;
                    rotation?: number | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    ellipse?: boolean | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    template?: string | undefined;
                }>, "many">;
                properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"int">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "int";
                    value: number;
                }, {
                    name: string;
                    type: "int";
                    value: number;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"bool">;
                    value: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "bool";
                    value: boolean;
                }, {
                    name: string;
                    type: "bool";
                    value: boolean;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"float">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "float";
                    value: number;
                }, {
                    name: string;
                    type: "float";
                    value: number;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"string">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "string";
                    value: string;
                }, {
                    name: string;
                    type: "string";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"file">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "file";
                    value: string;
                }, {
                    name: string;
                    type: "file";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"color">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "color";
                    value: string;
                }, {
                    name: string;
                    type: "color";
                    value: string;
                }>, z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodLiteral<"object">;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "object";
                    value: number;
                }, {
                    name: string;
                    type: "object";
                    value: number;
                }>]>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "objectgroup";
                x: number;
                y: number;
                opacity: number;
                visible: boolean;
                draworder: string;
                objects: {
                    name?: string | undefined;
                    type?: string | undefined;
                    height?: number | undefined;
                    width?: number | undefined;
                    x?: number | undefined;
                    y?: number | undefined;
                    id?: number | undefined;
                    properties?: ({
                        name: string;
                        type: "int";
                        value: number;
                    } | {
                        name: string;
                        type: "bool";
                        value: boolean;
                    } | {
                        name: string;
                        type: "float";
                        value: number;
                    } | {
                        name: string;
                        type: "string";
                        value: string;
                    } | {
                        name: string;
                        type: "file";
                        value: string;
                    } | {
                        name: string;
                        type: "color";
                        value: string;
                    } | {
                        name: string;
                        type: "object";
                        value: number;
                    })[] | undefined;
                    visible?: boolean | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    } | undefined;
                    rotation?: number | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    ellipse?: boolean | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    template?: string | undefined;
                }[];
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                tintcolor?: string | undefined;
            }, {
                name: string;
                type: "objectgroup";
                x: number;
                y: number;
                opacity: number;
                visible: boolean;
                draworder: string;
                objects: {
                    name?: string | undefined;
                    type?: string | undefined;
                    height?: number | undefined;
                    width?: number | undefined;
                    x?: number | undefined;
                    y?: number | undefined;
                    id?: number | undefined;
                    properties?: ({
                        name: string;
                        type: "int";
                        value: number;
                    } | {
                        name: string;
                        type: "bool";
                        value: boolean;
                    } | {
                        name: string;
                        type: "float";
                        value: number;
                    } | {
                        name: string;
                        type: "string";
                        value: string;
                    } | {
                        name: string;
                        type: "file";
                        value: string;
                    } | {
                        name: string;
                        type: "color";
                        value: string;
                    } | {
                        name: string;
                        type: "object";
                        value: number;
                    })[] | undefined;
                    visible?: boolean | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    } | undefined;
                    rotation?: number | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    ellipse?: boolean | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    template?: string | undefined;
                }[];
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                tintcolor?: string | undefined;
            }>>;
            probability: z.ZodOptional<z.ZodNumber>;
            properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"int">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "int";
                value: number;
            }, {
                name: string;
                type: "int";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "bool";
                value: boolean;
            }, {
                name: string;
                type: "bool";
                value: boolean;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "float";
                value: number;
            }, {
                name: string;
                type: "float";
                value: number;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"string">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "string";
                value: string;
            }, {
                name: string;
                type: "string";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"file">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "file";
                value: string;
            }, {
                name: string;
                type: "file";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"color">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "color";
                value: string;
            }, {
                name: string;
                type: "color";
                value: string;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"object">;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "object";
                value: number;
            }, {
                name: string;
                type: "object";
                value: number;
            }>]>, "many">>;
            image: z.ZodOptional<z.ZodString>;
            imageheight: z.ZodOptional<z.ZodNumber>;
            imagewidth: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: number;
            type?: string | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                x: number;
                y: number;
                opacity: number;
                visible: boolean;
                draworder: string;
                objects: {
                    name?: string | undefined;
                    type?: string | undefined;
                    height?: number | undefined;
                    width?: number | undefined;
                    x?: number | undefined;
                    y?: number | undefined;
                    id?: number | undefined;
                    properties?: ({
                        name: string;
                        type: "int";
                        value: number;
                    } | {
                        name: string;
                        type: "bool";
                        value: boolean;
                    } | {
                        name: string;
                        type: "float";
                        value: number;
                    } | {
                        name: string;
                        type: "string";
                        value: string;
                    } | {
                        name: string;
                        type: "file";
                        value: string;
                    } | {
                        name: string;
                        type: "color";
                        value: string;
                    } | {
                        name: string;
                        type: "object";
                        value: number;
                    })[] | undefined;
                    visible?: boolean | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    } | undefined;
                    rotation?: number | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    ellipse?: boolean | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    template?: string | undefined;
                }[];
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            image?: string | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            probability?: number | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
        }, {
            id: number;
            type?: string | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                x: number;
                y: number;
                opacity: number;
                visible: boolean;
                draworder: string;
                objects: {
                    name?: string | undefined;
                    type?: string | undefined;
                    height?: number | undefined;
                    width?: number | undefined;
                    x?: number | undefined;
                    y?: number | undefined;
                    id?: number | undefined;
                    properties?: ({
                        name: string;
                        type: "int";
                        value: number;
                    } | {
                        name: string;
                        type: "bool";
                        value: boolean;
                    } | {
                        name: string;
                        type: "float";
                        value: number;
                    } | {
                        name: string;
                        type: "string";
                        value: string;
                    } | {
                        name: string;
                        type: "file";
                        value: string;
                    } | {
                        name: string;
                        type: "color";
                        value: string;
                    } | {
                        name: string;
                        type: "object";
                        value: number;
                    })[] | undefined;
                    visible?: boolean | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    } | undefined;
                    rotation?: number | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    ellipse?: boolean | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    template?: string | undefined;
                }[];
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            image?: string | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            probability?: number | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
        }>, "many">>;
        properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"int">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "int";
            value: number;
        }, {
            name: string;
            type: "int";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "bool";
            value: boolean;
        }, {
            name: string;
            type: "bool";
            value: boolean;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "float";
            value: number;
        }, {
            name: string;
            type: "float";
            value: number;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "string";
            value: string;
        }, {
            name: string;
            type: "string";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"file">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "file";
            value: string;
        }, {
            name: string;
            type: "file";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"color">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "color";
            value: string;
        }, {
            name: string;
            type: "color";
            value: string;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"object">;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: "object";
            value: number;
        }, {
            name: string;
            type: "object";
            value: number;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        columns: number;
        tileheight: number;
        tilewidth: number;
        tilecount: number;
        spacing: number;
        margin: number;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        image?: string | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        firstgid?: number | undefined;
        objectalignment?: "left" | "center" | "right" | "top" | "bottom" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "isometric" | "orthogonal";
        } | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tiles?: {
            id: number;
            type?: string | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                x: number;
                y: number;
                opacity: number;
                visible: boolean;
                draworder: string;
                objects: {
                    name?: string | undefined;
                    type?: string | undefined;
                    height?: number | undefined;
                    width?: number | undefined;
                    x?: number | undefined;
                    y?: number | undefined;
                    id?: number | undefined;
                    properties?: ({
                        name: string;
                        type: "int";
                        value: number;
                    } | {
                        name: string;
                        type: "bool";
                        value: boolean;
                    } | {
                        name: string;
                        type: "float";
                        value: number;
                    } | {
                        name: string;
                        type: "string";
                        value: string;
                    } | {
                        name: string;
                        type: "file";
                        value: string;
                    } | {
                        name: string;
                        type: "color";
                        value: string;
                    } | {
                        name: string;
                        type: "object";
                        value: number;
                    })[] | undefined;
                    visible?: boolean | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    } | undefined;
                    rotation?: number | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    ellipse?: boolean | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    template?: string | undefined;
                }[];
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            image?: string | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            probability?: number | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
        }[] | undefined;
    }, {
        name: string;
        columns: number;
        tileheight: number;
        tilewidth: number;
        tilecount: number;
        spacing: number;
        margin: number;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        image?: string | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        firstgid?: number | undefined;
        objectalignment?: "left" | "center" | "right" | "top" | "bottom" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "isometric" | "orthogonal";
        } | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tiles?: {
            id: number;
            type?: string | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                x: number;
                y: number;
                opacity: number;
                visible: boolean;
                draworder: string;
                objects: {
                    name?: string | undefined;
                    type?: string | undefined;
                    height?: number | undefined;
                    width?: number | undefined;
                    x?: number | undefined;
                    y?: number | undefined;
                    id?: number | undefined;
                    properties?: ({
                        name: string;
                        type: "int";
                        value: number;
                    } | {
                        name: string;
                        type: "bool";
                        value: boolean;
                    } | {
                        name: string;
                        type: "float";
                        value: number;
                    } | {
                        name: string;
                        type: "string";
                        value: string;
                    } | {
                        name: string;
                        type: "file";
                        value: string;
                    } | {
                        name: string;
                        type: "color";
                        value: string;
                    } | {
                        name: string;
                        type: "object";
                        value: number;
                    })[] | undefined;
                    visible?: boolean | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    } | undefined;
                    rotation?: number | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    ellipse?: boolean | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    template?: string | undefined;
                }[];
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            image?: string | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            probability?: number | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
        }[] | undefined;
    }>, z.ZodObject<{
        firstgid: z.ZodNumber;
        source: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstgid: number;
        source: string;
    }, {
        firstgid: number;
        source: string;
    }>]>, "many">;
    properties: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"int">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "int";
        value: number;
    }, {
        name: string;
        type: "int";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "bool";
        value: boolean;
    }, {
        name: string;
        type: "bool";
        value: boolean;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "float";
        value: number;
    }, {
        name: string;
        type: "float";
        value: number;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "string";
        value: string;
    }, {
        name: string;
        type: "string";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"file">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "file";
        value: string;
    }, {
        name: string;
        type: "file";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"color">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "color";
        value: string;
    }, {
        name: string;
        type: "color";
        value: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"object">;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "object";
        value: number;
    }, {
        name: string;
        type: "object";
        value: number;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: string;
    height: number;
    width: number;
    tileheight: number;
    tilewidth: number;
    orientation: "isometric" | "orthogonal" | "staggered" | "hexagonal";
    tiledversion: string;
    version: string;
    infinite: boolean;
    nextlayerid: number;
    nextobjectid: number;
    renderorder: "right-down" | "right-up" | "left-down" | "left-up";
    layers: ({
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "csv";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    } | {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "gzip";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    } | {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "zlib";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    } | {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "zstandard";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    } | {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: string;
        encoding: "base64";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        compression?: string | undefined;
    } | {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        startx: number;
        starty: number;
        chunks: ({
            height: number;
            width: number;
            x: number;
            y: number;
            data: string;
        } | {
            height: number;
            width: number;
            x: number;
            y: number;
            data: number[];
        })[];
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        data?: undefined;
        encoding?: string | undefined;
        compression?: string | undefined;
    } | {
        name: string;
        type: "objectgroup";
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        draworder: string;
        objects: {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }[];
        color?: string | undefined;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    } | {
        name: string;
        type: "imagelayer";
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        image?: string | undefined;
        repeatx?: boolean | undefined;
        repeaty?: boolean | undefined;
        transparentcolor?: string | undefined;
    })[];
    tilesets: ({
        name: string;
        columns: number;
        tileheight: number;
        tilewidth: number;
        tilecount: number;
        spacing: number;
        margin: number;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        image?: string | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        firstgid?: number | undefined;
        objectalignment?: "left" | "center" | "right" | "top" | "bottom" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "isometric" | "orthogonal";
        } | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tiles?: {
            id: number;
            type?: string | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                x: number;
                y: number;
                opacity: number;
                visible: boolean;
                draworder: string;
                objects: {
                    name?: string | undefined;
                    type?: string | undefined;
                    height?: number | undefined;
                    width?: number | undefined;
                    x?: number | undefined;
                    y?: number | undefined;
                    id?: number | undefined;
                    properties?: ({
                        name: string;
                        type: "int";
                        value: number;
                    } | {
                        name: string;
                        type: "bool";
                        value: boolean;
                    } | {
                        name: string;
                        type: "float";
                        value: number;
                    } | {
                        name: string;
                        type: "string";
                        value: string;
                    } | {
                        name: string;
                        type: "file";
                        value: string;
                    } | {
                        name: string;
                        type: "color";
                        value: string;
                    } | {
                        name: string;
                        type: "object";
                        value: number;
                    })[] | undefined;
                    visible?: boolean | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    } | undefined;
                    rotation?: number | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    ellipse?: boolean | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    template?: string | undefined;
                }[];
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            image?: string | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            probability?: number | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
        }[] | undefined;
    } | {
        firstgid: number;
        source: string;
    })[];
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    compressionlevel?: number | undefined;
    parallaxoriginx?: number | undefined;
    parallaxoriginy?: number | undefined;
    hexsidelength?: number | undefined;
    staggeraxis?: "x" | "y" | undefined;
    staggerindex?: "odd" | "even" | undefined;
    backgroundcolor?: string | undefined;
}, {
    type: string;
    height: number;
    width: number;
    tileheight: number;
    tilewidth: number;
    orientation: "isometric" | "orthogonal" | "staggered" | "hexagonal";
    tiledversion: string;
    version: string;
    infinite: boolean;
    nextlayerid: number;
    nextobjectid: number;
    renderorder: "right-down" | "right-up" | "left-down" | "left-up";
    layers: ({
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "csv";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    } | {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "gzip";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    } | {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "zlib";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    } | {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: number[];
        encoding: "base64";
        compression: "zstandard";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    } | {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        data: string;
        encoding: "base64";
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        compression?: string | undefined;
    } | {
        name: string;
        type: "tilelayer";
        height: number;
        width: number;
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        startx: number;
        starty: number;
        chunks: ({
            height: number;
            width: number;
            x: number;
            y: number;
            data: string;
        } | {
            height: number;
            width: number;
            x: number;
            y: number;
            data: number[];
        })[];
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        data?: undefined;
        encoding?: string | undefined;
        compression?: string | undefined;
    } | {
        name: string;
        type: "objectgroup";
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        draworder: string;
        objects: {
            name?: string | undefined;
            type?: string | undefined;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            id?: number | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            visible?: boolean | undefined;
            text?: {
                text: string;
                color?: string | undefined;
                fontfamily?: string | undefined;
                pixelsize?: number | undefined;
                wrap?: boolean | undefined;
                halign?: "left" | "center" | "right" | "justify" | undefined;
                valign?: "center" | "top" | "bottom" | undefined;
            } | undefined;
            rotation?: number | undefined;
            gid?: number | undefined;
            point?: boolean | undefined;
            ellipse?: boolean | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            template?: string | undefined;
        }[];
        color?: string | undefined;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
    } | {
        name: string;
        type: "imagelayer";
        x: number;
        y: number;
        id: number;
        opacity: number;
        visible: boolean;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        tintcolor?: string | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        image?: string | undefined;
        repeatx?: boolean | undefined;
        repeaty?: boolean | undefined;
        transparentcolor?: string | undefined;
    })[];
    tilesets: ({
        name: string;
        columns: number;
        tileheight: number;
        tilewidth: number;
        tilecount: number;
        spacing: number;
        margin: number;
        class?: string | undefined;
        properties?: ({
            name: string;
            type: "int";
            value: number;
        } | {
            name: string;
            type: "bool";
            value: boolean;
        } | {
            name: string;
            type: "float";
            value: number;
        } | {
            name: string;
            type: "string";
            value: string;
        } | {
            name: string;
            type: "file";
            value: string;
        } | {
            name: string;
            type: "color";
            value: string;
        } | {
            name: string;
            type: "object";
            value: number;
        })[] | undefined;
        image?: string | undefined;
        imageheight?: number | undefined;
        imagewidth?: number | undefined;
        firstgid?: number | undefined;
        objectalignment?: "left" | "center" | "right" | "top" | "bottom" | "topleft" | "topright" | "bottomleft" | "bottomright" | undefined;
        grid?: {
            height: number;
            width: number;
            orientation: "isometric" | "orthogonal";
        } | undefined;
        tileoffset?: {
            x: number;
            y: number;
        } | undefined;
        tiles?: {
            id: number;
            type?: string | undefined;
            properties?: ({
                name: string;
                type: "int";
                value: number;
            } | {
                name: string;
                type: "bool";
                value: boolean;
            } | {
                name: string;
                type: "float";
                value: number;
            } | {
                name: string;
                type: "string";
                value: string;
            } | {
                name: string;
                type: "file";
                value: string;
            } | {
                name: string;
                type: "color";
                value: string;
            } | {
                name: string;
                type: "object";
                value: number;
            })[] | undefined;
            objectgroup?: {
                name: string;
                type: "objectgroup";
                x: number;
                y: number;
                opacity: number;
                visible: boolean;
                draworder: string;
                objects: {
                    name?: string | undefined;
                    type?: string | undefined;
                    height?: number | undefined;
                    width?: number | undefined;
                    x?: number | undefined;
                    y?: number | undefined;
                    id?: number | undefined;
                    properties?: ({
                        name: string;
                        type: "int";
                        value: number;
                    } | {
                        name: string;
                        type: "bool";
                        value: boolean;
                    } | {
                        name: string;
                        type: "float";
                        value: number;
                    } | {
                        name: string;
                        type: "string";
                        value: string;
                    } | {
                        name: string;
                        type: "file";
                        value: string;
                    } | {
                        name: string;
                        type: "color";
                        value: string;
                    } | {
                        name: string;
                        type: "object";
                        value: number;
                    })[] | undefined;
                    visible?: boolean | undefined;
                    text?: {
                        text: string;
                        color?: string | undefined;
                        fontfamily?: string | undefined;
                        pixelsize?: number | undefined;
                        wrap?: boolean | undefined;
                        halign?: "left" | "center" | "right" | "justify" | undefined;
                        valign?: "center" | "top" | "bottom" | undefined;
                    } | undefined;
                    rotation?: number | undefined;
                    gid?: number | undefined;
                    point?: boolean | undefined;
                    ellipse?: boolean | undefined;
                    polyline?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    polygon?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                    template?: string | undefined;
                }[];
                id?: number | undefined;
                properties?: ({
                    name: string;
                    type: "int";
                    value: number;
                } | {
                    name: string;
                    type: "bool";
                    value: boolean;
                } | {
                    name: string;
                    type: "float";
                    value: number;
                } | {
                    name: string;
                    type: "string";
                    value: string;
                } | {
                    name: string;
                    type: "file";
                    value: string;
                } | {
                    name: string;
                    type: "color";
                    value: string;
                } | {
                    name: string;
                    type: "object";
                    value: number;
                })[] | undefined;
                tintcolor?: string | undefined;
            } | undefined;
            image?: string | undefined;
            animation?: {
                duration: number;
                tileid: number;
            }[] | undefined;
            probability?: number | undefined;
            imageheight?: number | undefined;
            imagewidth?: number | undefined;
        }[] | undefined;
    } | {
        firstgid: number;
        source: string;
    })[];
    class?: string | undefined;
    properties?: ({
        name: string;
        type: "int";
        value: number;
    } | {
        name: string;
        type: "bool";
        value: boolean;
    } | {
        name: string;
        type: "float";
        value: number;
    } | {
        name: string;
        type: "string";
        value: string;
    } | {
        name: string;
        type: "file";
        value: string;
    } | {
        name: string;
        type: "color";
        value: string;
    } | {
        name: string;
        type: "object";
        value: number;
    })[] | undefined;
    compressionlevel?: number | undefined;
    parallaxoriginx?: number | undefined;
    parallaxoriginy?: number | undefined;
    hexsidelength?: number | undefined;
    staggeraxis?: "x" | "y" | undefined;
    staggerindex?: "odd" | "even" | undefined;
    backgroundcolor?: string | undefined;
}>;
export type TiledObjectGroup = z.infer<typeof TiledObjectGroup>;
export type TiledObject = z.infer<typeof TiledObject>;
export type TiledTile = z.infer<typeof TiledTile>;
export type TiledText = z.infer<typeof TiledText>;
export type TiledTileset = z.infer<typeof TiledTileset>;
export type TiledTilesetEmbedded = z.infer<typeof TiledTilesetEmbedded>;
export type TiledTilesetExternal = z.infer<typeof TiledTilesetExternal>;
export type TiledTilesetFile = z.infer<typeof TiledTilesetFile>;
export type TiledTemplate = z.infer<typeof TiledTemplate>;
export type TiledMap = z.infer<typeof TiledMap>;
export type TiledTileLayer = z.infer<typeof TiledTileLayer>;
export type TiledTileLayerInfinite = z.infer<typeof TiledTileLayerInfinite>;
export type TiledObjectLayer = z.infer<typeof TiledObjectLayer>;
export type TiledImageLayer = z.infer<typeof TiledImageLayer>;
export type TiledLayer = z.infer<typeof TiledLayer>;
export type TiledProperty = z.infer<typeof TiledProperty>;
export type TiledPropertyTypes = Pick<TiledProperty, 'type'>['type'];
export declare function isInfiniteLayer(tileLayer: TiledTileLayer): tileLayer is TiledTileLayerInfinite;
export declare function isTiledTilesetEmbedded(ts: TiledTileset): ts is TiledTilesetEmbedded;
export declare function isTiledTilesetExternal(ts: TiledTileset): ts is TiledTilesetExternal;
declare class BoundingBox {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    combine(other: BoundingBox): BoundingBox;
}
export declare class TiledParser {
    _coerceNumber(value: any): number;
    _coerceBoolean(value: any): boolean;
    _coerceType(type: TiledPropertyTypes, value: string): string | number | boolean;
    _parsePropertiesNode(propertiesNode: Element, target: any): void;
    _parseAttributes(node: Element, target: any): void;
    /**
     * Takes an xml string and uses an available parser (DOMParser in browser or JSDOM in Node.js)
     * to produce a DOM object compatible with at least DOM Level 3.
     * @param xml
     * @returns
     */
    _parseToDocument(xml: string): Document;
    parseObject(objectNode: Element, strict?: boolean): TiledObject;
    parseTileset(tilesetNode: Element, strict?: boolean): TiledTileset;
    _largestBounds: BoundingBox;
    parseTileLayer(layerNode: Element, infinite: boolean, strict?: boolean): TiledLayer;
    parseObjectGroup(groupNode: Element, strict?: boolean): TiledLayer;
    parseImageLayer(imageNode: Element, strict?: boolean): TiledLayer;
    parseExternalTemplate(txXml: string, strict?: boolean): TiledTemplate;
    /**
     * Takes Tiled tmx xml and produces the equivalent Tiled txj (json) content
     * @param tsxXml
     */
    parseExternalTileset(tsxXml: string, strict?: boolean): TiledTilesetFile;
    /**
     * Takes Tiled tmx xml and produces the equivalent Tiled tmj (json) content
     * @param tmxXml
     * @returns
     */
    parse(tmxXml: string, strict?: boolean): TiledMap;
}
export {};
